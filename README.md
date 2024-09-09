# README.md

Projet Next.js 13 et utilisation de WordPress avec MAMP.

Le front-end de ce projet est basé sur Next.js 13 et le back-end sur WordPress, configuré à l'aide de MAMP. Dans ce guide, on explique en détail comment configurer l'environnement de travail, installer WordPress, configurer la base de données et connecter le thème WordPress à la base de données. On y trouve également des renseignements sur la sécurité des API et la configuration de Next.js.

### Mise en place du cadre de travail.

1. **Télécharger et installer MAMP** - Vous pouvez télécharger et installer MAMP depuis [le site officiel](https://www.mamp.info/en/downloads/).

2. **Installation de MAMP** - Lancer MAMP et configurer les ports Apache et MySQL sur 8080 et 3306, respectivement.

3. **Établissement de la base de données**
   Les serveurs Apache et MySQL doivent être démarrés dans MAMP.
   - Utiliser phpMyAdmin en se connectant à `http://localhost:8080/phpMyAdmin`.
   - Créer une base de données inédite appelée « inolib ».

Installation du logiciel WordPress.

1. **Download of WordPress** - Download the latest version of WordPress from [the official site](https://wordpress.org/download/).
   Le fichier téléchargé doit être décompressé dans le dossier `htdocs` de MAMP.

2. **Ajustement de WordPress**
   - Changer le fichier `wp-config-sample.php` en `wp-config.php`.
   - Effectuer l'ouverture de `wp-config.php` et ajuster les paramètres de connexion à la base de données.
     ````php initialize('DB_NAME', 'inolib');
      initialize('DB_USER', 'root');
       initialize('DB_PASSWORD', 'root');
        initialize('DB_HOST', 'localhost:3306');
     ``` - Effectuer la sauvegarde et la fermeture du fichier.
     3. Élaboration de la base de données.
     ````
   - Lancer les serveurs Apache et MySQL dans le module MAMP.
     Il est possible d'accéder à phpMyAdmin en utilisant le lien suivant : http://localhost:8080/phpMyAdmin.
   - Enregistrer une nouvelle base de données appelée « inolib ».

Mise en place de WordPress

1. **Installation de WordPress** - Vous pouvez télécharger la version la plus récente de WordPress depuis [le site officiel](https://wordpress.org/uninstall/).
   – Exécuter la décompression du fichier téléchargé dans le dossier `htdocs` de MAMP.

**Configuration de WordPress**

- Rendez-vous dans le navigateur sur le site `http://localhost:8080/WORDPRESS`.
- Suivez les consignes pour l'installation de WordPress et la configuration des informations du site web.
  Le site s'appelle Inolib.
  E-mail : [votre adresse e-mail]

  - Login administrateur : [votre mot de passe]

  4.  **Sélection du sujet**

- Accéder à l'interface de gestion de WordPress.
- Rendez-vous dans la section Apparence > Thèmes et sélectionnez le thème Twenty Twenty-One.

### Mise en place du thème 1. **Changement des fonctions.php**

- Explorer le fichier `fonctions.php` du thème Twenty Twenty-One.
- Ajouter le code ci-dessous afin de limiter l'accès au back-office aux administrateurs seulement :

  ````php ajoute l'action "admin_init", "restrict_admin_avec_redirect" ; fonction restrict_admin_avec_redirect() { if (!current_user_can('administrator') &&!(defined('DOING_AJAX') && DOING_AJAX)) { wp_redirect(home_url()); sortie; }
  ``` - Inclure également un lien pour garantir la sécurité des API en limitant les requêtes GET :
  ```php ajoute le filtre'rest_authentication_errors', 'only_allow_get_requests' avec la fonction only_allow_get_requests (fonction).($résultat) {if ($_SERVER['REQUEST_METHOD']!= "GET")} { return new WP_Error('rest_forbidden', 'Les requêtes GET sont autorisées uniquement', array('status' => 403)); } return $result;
  ````

  ### Mise en place de Next.js

1. **Élaboration d'un dépôt supplémentaire pour le front-end**

   - Installer un nouveau projet Next.js dans le terminal en utilisant TypeScript et Tailwind CSS :
     ````sh npx créer-la-nouvelle-application@actuelle -ts cd [nom-du-projet]
     npx init tailwindcss -p ```
     ````
   - Transposer le projet en utilisant `pnpm` plutôt que `npm` : `sh npm install -g pnpm pnpm install `

2. **Gestion de `package.json`** - Lancer `package.json` et vérifier que la commande de démarrage du serveur est `pnpm run dev` : `json { "scripts": { "dev": "next dev" } } `

3. **Fonctionnement du serveur** - Dans le terminal, lancer le serveur de développement en utilisant la commande `sh pnpm run dev `.
   - Rendez-vous sur `http://localhost:3000` afin d'observer l'utilisation de l'application Next.js.

### Liens pertinents

MAMP (https://www.mamp.info/en/downloads/)

- [Installer WordPress](https://wordpress.org/install/)
- [Dossier Next.js](https://nextjs.org/documentation)
- [Guide de Tailwind CSS](https://tailwindcss.com/guides)

**Ce guide explique en détail comment configurer et déployer le projet en utilisant Next.js et WordPress à l'aide de MAMP. N'hésitez pas à personnaliser et à étendre cette configuration en fonction des exigences particulières.**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
