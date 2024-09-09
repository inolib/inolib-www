Documentation : Résolution des Dysfonctionnements Suite à une Mise à Jour de WordPress
Contexte :

Lors d'une mise à jour de WordPress, plusieurs dysfonctionnements sont survenus, entraînant notamment la non-exécution du fichier functions.php du thème actif. Ce document synthétise les étapes suivies pour identifier, isoler et résoudre le problème, ainsi que la procédure de réinstallation de WordPress pour restaurer le fonctionnement normal du site.

1. Symptômes Observés :

Le fichier functions.php du thème actif (Twenty Twenty-One) ne s'exécutait plus, même après avoir ajouté du code simple ou des erreurs volontaires pour déclencher des logs.
Aucun fichier debug.log n'a été généré dans le répertoire wp-content malgré l'activation du mode débogage dans wp-config.php.
Le fichier .maintenance, qui est censé apparaître lors des mises à jour en cours, n'était pas présent.
Tentative de réinstallation de WordPress empêchée par un message indiquant qu'une autre mise à jour était en cours. 2. Diagnostic :

Plusieurs tentatives de modification et de suppression de code dans le fichier functions.php n'ont pas réussi à déclencher l'exécution de ce fichier ou à générer des logs d'erreurs, suggérant un problème plus profond lié à la mise à jour de WordPress.
Le problème semblait être lié à un verrouillage de mise à jour resté actif dans la base de données, empêchant toute nouvelle action sur WordPress. 3. Étapes de Résolution :

3.1 Suppression du Verrouillage de Mise à Jour :

Accès à phpMyAdmin :

Connexion à phpMyAdmin via l'interface MAMP pour accéder à la base de données.
Sélection de la base de données inolib.
Suppression de l'entrée core_updater.lock :

Dans la table wp_options, suppression de l'entrée core_updater.lock.
Cette entrée était responsable de l'empêchement de la réinstallation de WordPress.
3.2 Réinstallation Manuelle de WordPress :

Téléchargement de la Dernière Version de WordPress :

Téléchargement de la dernière version de WordPress depuis wordpress.org.
Préparation de la Réinstallation :

Sauvegarde des fichiers du site et de la base de données pour prévenir toute perte de données.
Suppression des dossiers wp-admin et wp-includes du répertoire racine du projet dans htdocs (répertoire utilisé par MAMP).
Téléversement des Nouveaux Fichiers :

Téléversement des dossiers wp-admin et wp-includes extraits du fichier WordPress téléchargé vers le répertoire du site actuel.
Téléversement des fichiers racine de WordPress (sauf wp-content et wp-config-sample.php) dans le répertoire du projet.
Finalisation :

Vérification que le site fonctionne correctement après la réinstallation.
Réinitialisation des permaliens via l'interface WordPress pour s'assurer que tout est configuré correctement. 4. Conclusion :
Cette documentation décrit le processus de diagnostic et de résolution d'un dysfonctionnement de WordPress lié à une mise à jour incomplète. Le problème a été résolu en supprimant manuellement le verrouillage de mise à jour dans la base de données et en réinstallant manuellement WordPress, tout en préservant les contenus du dossier wp-content.

Recommandations :

Toujours sauvegarder les fichiers et la base de données avant toute manipulation critique.
Utiliser phpMyAdmin pour diagnostiquer et résoudre les problèmes liés à la base de données, en particulier lors des mises à jour échouées.
Conserver cette documentation pour référence en cas de futurs dysfonctionnements similaires.
