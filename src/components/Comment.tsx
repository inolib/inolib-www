import { zodResolver } from "@hookform/resolvers/zod";
import DOMPurify from "dompurify";
import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import Image from 'next/image'
import { Button } from "~/components/UI/Button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/UI/Form";
import { Input } from "~/components/UI/Input";
import { Textarea } from "~/components/UI/TextArea";
import type { OneComment, PostComment } from "~/lib/types/features/componentTypes/types";

// Schéma de validation pour le formulaire
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le pseudo doit contenir plus de 2 caractères.",
  }),
  email: z.string().email({
    message: "Entrer une adresse email valide.",
  }),
  comment: z.string().min(1, {
    message: "Le commentaire ne doit pas être vide.",
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
      const oneComment: OneComment = {
        date: new Date().toISOString(),
        id: newComment.id,
        author_name: newComment.author_name,
        content: {
          rendered: newComment.content.rendered,
        },
      };
      onCommentAdded(oneComment);
      methods.reset(); // Réinitialiser le formulaire après la soumission
    }
  };

  return (
    <FormProvider {...methods}>
      <section
        aria-labelledby="comment-section"
        className="py-8 px-8 justify-center mx-auto w-full max-w-[1570px]"
      >
        <div className="flex flex-col">
          <Image
            src="/Icons/commentV.svg"
            alt="Icône de commentaire"
            width={30}
            height={30}
            className="mb-5"
          />
          <h2
            id="comment-section"
            className="text-2xl text-[#22576B] font-semibold mb-4"
          >
            Laisser un commentaire
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Les champs précédés d'un astérisque (*) sont obligatoires.
        </p>

        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          {/* Conteneur pour les champs */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Coordonnées */}
            <div className="flex-1 flex flex-col space-y-4 md:order-1 order-2">
              <FormField
                control={methods.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre nom *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Votre Pseudo"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                      />
                    </FormControl>
                    <FormDescription>
                      Ceci est votre nom d'affichage public.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre email (email@etc.com) *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Votre email"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                      />
                    </FormControl>
                    <FormDescription>
                      Votre adresse email ne sera pas partagée publiquement.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bouton Envoyer aligné en bas */}
              <div className="pt-16 flex justify-center md:justify-start">
                <Button
                  type="submit"
                  className="rounded-full px-6 py-3 bg-green-900 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring focus:ring-gray-300"
                >
                  Envoyer votre commentaire
                </Button>
              </div>
            </div>

            {/* Champ de commentaire */}
            <div className="flex-1 md:order-2 order-1">
              <FormField
                control={methods.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre commentaire *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Rédigez votre commentaire ici..."
                        {...field}
                        className="mt-1 block w-full h-80 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
