import { ArrowDown } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type { PropsWithChildren } from "react";

import { CallToActionButtonLink, GhostButtonLink } from "~/components/button-links";
import { Section } from "~/components/sections";

import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="fr">
      <body className="bg-secondary font-manrope text-lg font-medium">
        <header role="banner">
          <Section className="flex justify-between bg-primary py-4">
            <GhostButtonLink className="text-secondary ring-secondary ring-offset-primary" href="#main">
              <ArrowDown />
              <span>Aller au contenu principal</span>
            </GhostButtonLink>

            {/* TODO: search bar */}

            <CallToActionButtonLink
              className="bg-yellow-neon text-green-dark ring-secondary ring-offset-primary"
              href="/Contact"
            >
              Nous contacter
            </CallToActionButtonLink>
          </Section>

          <Section className="bg-green-light py-4">
            <nav aria-label="Menu principal">
              <ul className="flex gap-12">
                <li>
                  <GhostButtonLink className="ring-secondary ring-offset-green-light" href="/">
                    <Image alt="Accueil" height={32} src="/images/logos/inolib-neon.svg" width={100} />
                  </GhostButtonLink>
                </li>

                {[
                  {
                    label: "Audit",
                    href: "/Audit",
                  },
                  {
                    label: "Accompagnement",
                    href: "/Accompagner",
                  },
                  {
                    label: "Développement",
                    href: "/Developpement",
                  },
                  {
                    label: "Formations",
                    href: "/Former",
                  },
                  {
                    label: "Actualités",
                    href: "/blog",
                  },
                  {
                    label: "À propos",
                    href: "/About",
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <GhostButtonLink className="text-secondary ring-secondary ring-offset-green-light" href={item.href}>
                      {item.label}
                    </GhostButtonLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Section>
        </header>

        <main id="main">{children}</main>

        <footer role="contentinfo">
          <Section className="flex gap-12 bg-primary py-8">
            <nav aria-label="Menu de pied de page">
              <ul className="flex gap-12">
                <li>
                  <GhostButtonLink className="ring-secondary ring-offset-primary" href="/">
                    <Image alt="Accueil" height={32} src="/images/logos/inolib-neon.svg" width={100} />
                  </GhostButtonLink>
                </li>

                {[
                  {
                    label: "Nos services",
                    href: "/#services",
                  },
                  {
                    label: "Nous rejoindre",
                    href: "/About#career",
                  },
                  {
                    label: "À propos",
                    href: "/About",
                  },
                  {
                    label: "Mentions légales",
                    href: "/LegalNotice",
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <GhostButtonLink className="text-secondary ring-secondary ring-offset-primary" href={item.href}>
                      {item.label}
                    </GhostButtonLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Section>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
