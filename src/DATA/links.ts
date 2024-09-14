import type { MenuItemProps } from "~/lib/types/features/componentTypes/types";

export const menuItems: MenuItemProps[] = [
  {
    href: "/Audit",
    label: "Auditer",
    subItems: [
      { href: "/Audit", label: "Audit" },

      { href: "/Audit/Conform", label: "Audit de conformité" },
      { href: "/Audit/TestUser", label: "Test utilisateurs" },
    ],
  },
  {
    href: "/Accompagner",
    label: "Accompagner",
    subItems: [
      { href: "/Accompagnement", label: "Accompagnement" },
      { href: "/Accompagnement/accompagnement", label: "Accompagnement de projet" },
      { href: "/Accompagnement/assistance", label: "Assistance" },
      { href: "/Accompagnement/referent", label: "Référent en Accessibilité" },
      { href: "/Audit/TestUser", label: "Test utilisateur" },
      { href: "/Accompagnement/schema", label: "Schéma" },
    ],
  },
  {
    href: "/Developpement",
    label: "Développer",
    subItems: [
      { href: "/Developpement", label: "Développement" },
      { href: "/Developpement/siteWeb", label: "Développement Web" },
      { href: "/Developpement/appliMobile", label: "Développement mobile" },
      { href: "/Developpement/saas", label: "Saas" },
    ],
  },
  {
    href: "/Former",
    label: "Former",
    subItems: [
      { href: "/Former", label: "Former" },
      { href: "/Formation", label: "Nos formations" },
    ],
  },
  {
    href: "/About",
    label: "À propos",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];
export const menuItemsFooter: MenuItemProps[] = [
  {
    href: "/#nav",
    label: "Nos services",
  },
  {
    href: "/About/#Carrer",
    label: "Nous rejoindre",
  },

  {
    href: "/About",
    label: "À propos",
  },
  {
    href: "/LegalNotice",
    label: "Mentions legales",
  },
];
