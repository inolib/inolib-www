
import Image from "next/image";

const Go = () => {
  return(
    <div>

<section className="flex flex-col text-center bg-[#FAFAFA]">
<header className="text-center m-4">
      <h1 className="text-4xl font-bold text-gray-900">Aller plus loin</h1>
    </header>
  <div className="flex flex-col text-center content-center align-center w-full">
    <p className="mb-6 text-gray-600">
    Accompagnement dans votre démarche d'accessibilité Coordination
    </p>
  </div>

  <aside className="flex-row flex">
    <div className="flex flex-row m-4 rounded-2xl bg-[#F5F9FA]  shadow ">
      <div className="content-center justify-center m-2">
        <Image src='/Icons/Aicon.svg' alt="" width={80} height={80}></Image>
      </div>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Développement sur-mesure</h2>

        <p className="mb-4 text-gray-700">
         Conseils pour maintenir un environnement numérique sécurisé et conforme.
        </p>

      </div>
    </div>
    <div className="flex flex-row m-4 rounded-2xl bg-[#F5F9FA] shadow">
      <div className="content-center justify-center m-2">
        <Image src="/Icons/siteWeb.svg" alt="" width={80} height={80}></Image>
      </div>
      <section>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Toujours la pour vous</h2>
        <p className="mb-4 text-gray-700">
        Suivi des anomalies via vos outils de gestion de projet (Redmine, Jira, Trello, Asana) </p>

      </section>
    </div>
  </aside>
</section>

</div>



  );

};


export default Go;


