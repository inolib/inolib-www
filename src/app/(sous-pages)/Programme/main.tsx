import Image from "next/image";

export default function MainForm() {
  return (
    <main className="relative mx-auto mt-10 px-4 py-8 lg:px-0">
      {/* Section principale */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-900 to-blue-800 text-white h-auto lg:h-[400px]">
        {/* Image sur la gauche pour grands écrans */}
        <div className="md:w-1/2 w-full h-[300px] lg:h-full relative lg:ml-16 lg:mt-20">
          <Image
            src="/Homepage/formation.jpg" // Mets le chemin correct ici
            alt="Formation sur l'accessibilité numérique"
            layout="fill"
            objectFit="cover"
            className="rounded-lg md:rounded-none"
          />
        </div>

        {/* Contenu texte à droite */}
        <div className="md:w-1/2 w-full p-6 lg:p-12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Formation - L'atelier de l'accessibilité numérique
          </h1>
          <p className="text-lg mb-4">
            Apprenez, innovez et façonnez un avenir digital où chacun trouve sa place.
          </p>
        </div>
      </section>

      {/* Programme de formation */}
      <section className="mt-24 max-w-7xl mx-auto">
        {/* Titre du programme */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sensibilisation aux fondamentaux de l’accessibilité numérique</h2>
        <p className="text-gray-500 mb-8">Programme mis à jour le : <time dateTime="2024-05-02">02 mai 2024</time></p>

        {/* Public visé */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Public visé</h3>
        <p className="text-gray-700 mb-6">Tout public, en particulier les professionnels du digital.</p>

        {/* Prérequis */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Prérequis</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Disposer d’un ordinateur sous Windows 10 ou 11 ou MACOS.</li>
          <li>Être débutant en matière d’accessibilité numérique (aucune connaissance ou quelques notions de base).</li>
        </ul>

        {/* Objectifs */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Objectifs</h3>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Cerner les difficultés des personnes en situation de handicap face au numérique.</li>
          <li>Saisir les enjeux de l’accessibilité numérique.</li>
          <li>Comprendre le cadre législatif et normatif de l’accessibilité numérique.</li>
          <li>Découvrir les grands principes et règles du RGAA.</li>
          <li>Mettre en place une démarche d’accessibilité numérique.</li>
        </ul>

        {/* Détails pratiques */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Détails pratiques</h3>
        <p className="text-gray-700 mb-4">
          <strong>Durée :</strong> 7 heures
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Modalités d'inscription :</strong> Contacter l’organisme de formation par téléphone ou par courriel pour une analyse de votre besoin. Un contrat ou une convention de formation sera ensuite envoyé pour signature.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Délais d'accès :</strong> 1 semaine
        </p>
        <p className="text-gray-700 mb-8">
          <strong>Modalités :</strong> Formation en distanciel et/ou présentiel
        </p>

        {/* Accessibilité pour personnes en situation de handicap */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessibilité des personnes en situation de handicap</h3>
        <p className="text-gray-700 mb-8">
          Toute personne en situation de handicap est invitée à prendre contact avec l’organisme afin de mettre en œuvre toute mesure utile au bon déroulement de la formation.
        </p>

        {/* Programme détaillé */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Programme</h3>

        <h4 className="text-xl font-semibold text-gray-800 mb-2">❶ Cerner les difficultés des personnes en situation de handicap face au numérique</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Définition du handicap</li>
          <li>Les situations de handicap impactées par le numérique</li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-800 mb-2">❷ Saisir les enjeux de l'accessibilité numérique</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Définition de l’accessibilité numérique</li>
          <li>Cerner les différents enjeux en termes juridiques et techniques</li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-800 mb-2">❸ Comprendre le cadre législatif et normatif de l’accessibilité numérique</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Les normes internationales WCAG</li>
          <li>Les normes européennes, zoom sur le RGAA</li>
          <li>Les 3 obligations d’accessibilité numérique (transparence, engagement, conformité)</li>
          <li>Les sanctions applicables</li>
          <li>Activité : « Tester l’accessibilité numérique »</li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-800 mb-2">❹ Mettre en place une démarche d'accessibilité numérique</h4>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Identifier les parties prenantes à l'accessibilité numérique au sein de l'organisation</li>
          <li>Activité : mise en situation d’un projet numérique</li>
        </ul>

        {/* Méthodes et évaluation */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Méthodes mobilisées et modalités d'évaluation</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Mise en pratique : « Tester l'accessibilité numérique »</li>
          <li>Mise en situation d’un projet numérique</li>
          <li>QCM de fin de formation</li>
        </ul>
      </section>
    </main>
  );
}
