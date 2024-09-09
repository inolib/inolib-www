import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#122023] text-white py-10 overflow-hidden xxs:px-8 xxs:space-x-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">Auditer</h2>
            <ul>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions <span className=" text-white text-xs px-2 py-1 rounded ml-1">New</span>
                </a>
              </li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">Accompagner</h2>
            <ul>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">Développer</h2>
            <ul>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">Former</h2>
            <ul>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">À propos</h2>
            <ul>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-[#8EBBC5] font-semibold mb-4">Blog</h2>
            <ul className=''>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Overview</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="flex items-center space-x-2">
            <Image 
            src="/Logo/LogoJaune.svg" 
            alt='Inolib logo' 
            width={100} 
            height={50} />
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">&copy; 2023 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
