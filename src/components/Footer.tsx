import Image from "next/image";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#122023] py-10 text-white xxs:space-x-3 xxs:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">Auditer</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions <span className="ml-1 rounded px-2 py-1 text-xs text-white">New</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">Accompagner</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">Développer</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">Former</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">À propos</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-[#8EBBC5]">Blog</h2>
            <ul className="">
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <Image src="/Logo/LogoJaune.svg" alt="Inolib logo" width={100} height={50} />
          </div>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">&copy; 2023 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
