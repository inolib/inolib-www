import type { Metadata } from "next";
import type { PropsWithChildren } from "react";



import "./globals.css";

export const metadata: Metadata = {


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
