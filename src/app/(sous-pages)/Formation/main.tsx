import Image from 'next/image';

export default function MainForm(){
  return(
    <main>
      <div className="grid md:grid-cols-2 gap-8 mx-10 my-10">
    <section className="container  py-16 px-4 lg:px-0 bg-[#FAFAFA]">
      

<div>
<h2 id="main-test-heading" className="text-3xl font-bold mb-4">Le processus d'audit Inolib en 4 étapes clés :</h2>
<p className="text-gray-600 mb-4">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
<ol className="list-none text-gray-600 space-y-6 ">
  <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
    <Image 
    src='/Icons/Aicon.svg' 
    alt='' width={30} height={30} />
    <div>
      <h3 className="font-semibold">1. Co-construction</h3>
      <p>Sélection d'un échantillon représentatif en collaboration avec vous.</p>
    </div>
  </li>
  <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
    <Image src='/Icons/loupe.svg' alt='' width={30} height={30} />
    <div>
      <h3 className="font-semibold">2. Investigation</h3>
      <p>Audit de conformité réalisé par nos experts, grâce à une grille de test spécifique.</p>
    </div>
  </li>
  <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
    <Image src='/Icons/eg.svg' alt='' width={30} height={30} />
    <div>
      <h3 className="font-semibold">3. Synthèse</h3>
      <p>Rédaction d'un rapport d'audit détaillé, incluant nos recommandations d'accessibilité.</p>
    </div>
  </li>
  <li className="flex items-start space-x-3 p-4 bg-[#F5F9FA] rounded-xl mr-8">
    <Image src='/Icons/chat.svg' alt='' width={30} height={30} />
    <div>
      <h3 className="font-semibold">4. Échange</h3>
      <p>Restitution des résultats pour vous offrir une vue d'ensemble et répondre à vos questions.</p>
    </div>
  </li>
</ol>
</div>
</section>
</div>
</main>
);
};