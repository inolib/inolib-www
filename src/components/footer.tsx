import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#122023] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Auditer</h3>
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
            <h3 className="text-xl font-bold mb-4">Accompagner</h3>
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
            <h3 className="text-xl font-bold mb-4">Développer</h3>
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
            <h3 className="text-xl font-bold mb-4">Former</h3>
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
            <h3 className="text-xl font-bold mb-4">À propos</h3>
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
            <h3 className="text-xl font-bold mb-4 text-green-400">Blog</h3>
            <ul>
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
            src="/Logo/logo_jaune_blanc.svg" 
            alt="Inolib logo" 
            width={150} 
            height={50} />
            
          </div>
          <p className="text-sm text-gray-400">&copy; 2023 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
