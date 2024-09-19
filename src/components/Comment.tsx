"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import DOMPurify from "dompurify";
import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { Button } from "~/components/UI/Button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/UI/Form";
import { Input } from "~/components/UI/Input";
import { Textarea } from "~/components/UI/TextArea";
import type { OneComment, PostComment } from "~/lib/types/features/componentTypes/types";

// Schéma de validation pour le formulaire, incluant l'email
const formSchema = z.object({
  username: z.string().min(2, {
    message: "le pseudo doit contenir plus de 2 characters.",
  }),
  email: z.string().email({
    message: "Entrer une adresse email valide.",
  }),
  comment: z.string().min(1, {
    message: "le commentaire ne doit pas etre vide.",
  }),
});

// Fonction pour soumettre le commentaire à WordPress
const submitComment = async (
  postId: number,
  username: string,
  email: string,
  comment: string,
): Promise<PostComment | null> => {
  const token = uuidv4(); // Génère un token temporaire unique

  try {
    const response = await fetch(`https://backend.inolib.fr/wp-json/wp/v2/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: postId,
        author_name: username,
        author_email: email,
        content: comment,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit comment");
    }

    const newComment = await response.json();
    return newComment;
  } catch (error) {
    console.error("Error submitting comment:", error);
    return null;
  }
};

// Composant de formulaire de commentaire
export const CommentForm = ({
  postId,
  onCommentAdded,
}: {
  postId: number;
  onCommentAdded: (comment: OneComment) => void;
}) => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (data: any) => {
    const sanitizedComment = DOMPurify.sanitize(data.comment);

    // Soumettre le commentaire à WordPress
    const newComment = await submitComment(postId, data.username, data.email, sanitizedComment);

    if (newComment) {
      onCommentAdded(newComment);
      methods.reset(); // Réinitialiser le formulaire après la soumission
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="m-auto w-1/3 justify-between space-y-8 pb-4">
        <FormField
          control={methods.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pseudo</FormLabel>
              <FormControl>
                <Input placeholder="Votre Pseudo" {...field} />
              </FormControl>
              <FormDescription>Ceci est votre nom d'affichage public.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Votre email" {...field} />
              </FormControl>
              <FormDescription>votre adresse email ne sera pas partagé publiquement.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire</FormLabel>
              <FormControl>
                <Textarea placeholder="Rédigez votre commentaire ici..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Publier</Button>
      </form>
    </FormProvider>
  );
};
