import Head from "next/head";

export default function Statis() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white py-6 sm:py-12">
        <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-center text-2xl font-semibold text-[#111F22] sm:text-3xl">
            Chiffres clés sur l'accessibilité numérique
          </h1>
          <p className="mb-10 text-center text-base text-gray-700 sm:text-lg">
            Entre 15 et 20% de la population mondiale est concernée par un handicap. En France, le dernier rapport du
            gouvernement publié en 2023 indique que 19% de la population est concernée. Cela inclut les handicaps
            visuels (cécité, malvoyance), moteurs (problèmes de dextérité avec une souris), auditifs (surdité,
            malentendance) et mentaux (dyslexie).
          </p>
          <div className="flex h-auto flex-col items-center justify-around rounded-lg bg-[#F5F9FA] p-6 shadow-md sm:h-72 sm:flex-row">
            <div className="mb-6 flex flex-col items-center pt-10 sm:mb-0 sm:pt-14">
              <div className="mb-2 font-manrope text-4xl font-bold text-[#4F8C99] sm:text-5xl md:text-6xl">19%</div>
              <div className="max-w-xs pt-3 text-center text-base font-bold text-[#111F22] sm:max-w-md sm:text-lg">
                de la population française est concernée par un handicap
              </div>
            </div>
            <div className="flex flex-col items-center pt-10 sm:pt-14">
              <div className="mb-2 font-manrope text-4xl font-bold text-[#4F8C99] sm:text-5xl md:text-6xl">10k</div>
              <div className="max-w-xs pt-3 text-center text-base font-bold text-[#111F22] sm:max-w-md sm:text-lg">
                Global downloads
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
