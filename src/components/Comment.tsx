"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

import { Button } from "~/components/UI/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/UI/Form";
import { Input } from "~/components/UI/Input";
import { Textarea } from "~/components/UI/TextArea";

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

type Comment = {
  id: number;
  post: number;
  author_name: string;
  author_email: string;
  content: {
    rendered: string;
  };
};

// Fonction pour soumettre le commentaire à WordPress
async function submitComment(postId: number, username: string, email: string, comment: string): Promise<Comment | null> {

  const token = uuidv4(); // Génère un token temporaire unique

  try {
    const response = await fetch(`http://localhost/WORDPRESS/wp-json/wp/v2/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
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
}

// Composant de formulaire de commentaire
export function CommentForm({ postId, onCommentAdded }: { postId: number; onCommentAdded: (comment: Comment) => void }) {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '', 
      email: '',
      comment: ''
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
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
