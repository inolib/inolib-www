import Image from "next/image";

export default function MainForm() {
  return (
    <main className="relative mx-auto mt-10 px-4 py-8 lg:px-0">
      {/* Section principale */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-900 to-blue-800 text-white h-auto lg:h-[400px]">
        {/* Image sur la gauche pour grands écrans */}
        <div className="md:w-1/2 w-full h-[300px] lg:h-full relative lg:ml-16 lg:mt-20">
          <Image
            src="/Homepage/formation-lg.jpg"
            alt=""
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Initiation aux fondamentaux de l’accessibilité numérique</h2>
        <p className="text-gray-500 mb-8">Programme mis à jour le : <time dateTime="2024-05-02">02 mai 2024</time></p>


        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intervenant à la formation :</h3>
        <p className="text-gray-700 mb-6">Monsieur Djebrine ALOUI <span className="text-amber-500">Djebrine.aloui@inolib.com</span>Tél :

<span className="text-amber-500">  06 47 21 90 69.</span></p>
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
          <strong>Tarif :</strong>

         400 euros TTC
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Modalités d'inscription :</strong> Contacter l’organisme de formation par téléphone<span className="text-purple-700"> 06 47 21 86 69 </span>ou par courriel <span className="text-purple-700">contact@inolib.com</span> pour l’analyse de vos besoins. Ensuite l’organisme vous adressera pour signature un contrat ou une convention de formation.
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
        Accessibilité des personnes en situation de handicap : toute personne en situation de handicap est invitée à prendre contact avec l’organisme afin de mettre en œuvre toute mesure utile au bon déroulement de la formation.
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
          <li >Les 3 obligations d’accessibilité numérique <li className="list-none pl-5">o oblogation de transparence </li> <li className="list-none pl-5">o obligation d'engagement</li>  <li className="list-none pl-5">o obligation conformité </li>     </li>
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
        <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Indicateurs de résultats :</h3>

<p className="text-gray-700 mb-8">Nombre de stagiaires formés depuis la mise en œuvre de cette prestation et taux de satisfaction globale.</p>
      </section>
    </main>
  );
}
