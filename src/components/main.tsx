import Image from 'next/image'
import {Button} from '~/components/UI/Button'

export default function Main() {
  return (
    <div className='bg-gradient-to-b from-[#122023] via-[#254147] to-black text-white min-h-screen rounded-tr-custom-tr'>
      <main className="flex flex-row items-center justify-between text-center py-20 px-4">

        <div className="max-w-4xl mx-auto rounded-br-full pb-10 text-left">
          <div className="bg-opacity-75 p-10 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ensemble, 
              rendons le numérique 
              accessible à tous
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Untitled is a next-gen financial technology company in the process
               of reinventing banking.
            </p>
            <div className="flex flex-wrap justify-start space-x-4">
              <button className="bg-[##254147] text-white px-4 py-2 rounded-md border-2 font-semibold hover:bg-yellow-600 transition">
                Decouvrir nos services
              </button>
              <Button variant="ButtonJaune">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/HomePage/group.svg"
            alt='image decorative'
            width={500}
            height={350}
          />
        </div>

      </main>
    </div>
  )
}
