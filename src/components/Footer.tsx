import Image from "next/image";
import Link from "next/link";
import { menuItemsFooter } from "~/DATA/links";
import { SocialButton } from "~/components/UI/SocialButton";

const Footer = () => {
  return (
    <footer className="bg-[#122023] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {menuItemsFooter.map((menuItem) => (
            <div key={menuItem.label} className="col-span-1 md:col-span-1 text-center">
              {/* Si pas de sous-items, afficher le lien dans le h2 */}
              {menuItem.subItems ? (
                <>
                  <h2 className="mb-4 text-xl text-[#8EBBC5]">{menuItem.label}</h2>
                  <ul>
                    {menuItem.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link href={subItem.href} className="hover:underline">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <h2 className="mb-4 text-xl text-[#8EBBC5]">
                  <Link href={menuItem.href} className="hover:underline">
                    {menuItem.label}
                  </Link>
                </h2>
              )}
            </div>
          ))}

        </div>
        {/* Suivez-nous section */}
        <div className="col-span-2 flex flex-col items-center lg:items-center">
            <h2 className="mb-4 text-xl text-[#8EBBC5] text-center">Suivez-nous!</h2>
            <div className="flex space-x-4">
              <SocialButton className="" />
            </div>
          </div>
        {/* Logo et droits réservés */}
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <Link href='/' aria-label="retourner a la page d'accueil">
            <Image src="/Logo/LogoJaune.svg" alt="" width={100} height={50} />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">&copy; 2024 Inolib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
