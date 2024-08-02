
const Intro = () => {
  return (
    <section className="py-16 px-4 bg-white text-center" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-[#CBE0E4] rounded-full">À propos</span>
        <h2 id="about-heading" className="text-3xl font-bold text-gray-900 mb-4">
          Nous faisons de l’inclusivité notre mot d’ordre.
        </h2>
        <p className="text-gray-600">
          Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.
        </p>
      </div>
    </section>
  );
};

export default Intro;
