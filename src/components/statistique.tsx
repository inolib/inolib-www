import Head from 'next/head';

export default function Statis() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-6 sm:py-12">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#111F22] text-center mb-6">
            Chiffres clés sur l'accessibilité numérique
          </h1>
          <p className="text-base sm:text-lg text-gray-700 text-center mb-10">
            Entre 15 et 20% de la population mondiale est concernée par un handicap. En France, le dernier rapport du gouvernement publié en 2023 indique que 19% de la population est concernée. Cela inclut les handicaps visuels (cécité, malvoyance), moteurs (problèmes de dextérité avec une souris), auditifs (surdité, malentendance) et mentaux (dyslexie).
          </p>
          <div className="flex flex-col sm:flex-row justify-around items-center bg-[#F5F9FA] h-auto sm:h-72 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-6 sm:mb-0 pt-10 sm:pt-14">
              <div className="text-4xl sm:text-5xl md:text-6xl font-manrope font-bold text-[#4F8C99] mb-2">19%</div>
              <div className="text-base sm:text-lg text-[#111F22] text-center font-bold max-w-xs sm:max-w-md pt-3">
                de la population française est concernée par un handicap
              </div>
            </div>
            <div className="flex flex-col items-center pt-10 sm:pt-14">
              <div className="text-4xl sm:text-5xl md:text-6xl font-manrope font-bold text-[#4F8C99] mb-2">10k</div>
              <div className="text-base sm:text-lg text-[#111F22] text-center font-bold max-w-xs sm:max-w-md pt-3">
                Global downloads
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
