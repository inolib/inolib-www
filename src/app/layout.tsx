import type { Metadata } from "next";
import type { PropsWithChildren } from "react";



import "./globals.css";

export const metadata: Metadata = {
  title: "Inolib - De l'idée au projet: pour un numérique accessible",
  description: "Découvrez les services, témoignages et actualités de notre entreprise.",
  robots: {
    index: false,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (

    <html lang="fr">

      <body className="font-manrope text-base font-medium leading-normal">{children}</body>
    </html>
  );
};

export default RootLayout;
