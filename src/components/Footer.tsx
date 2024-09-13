import Image from "next/image";
import Link from "next/link";
import { menuItemsFooter } from "~/DATA/links";
import{ SocialButton }from "~/components/UI/SocialButton"

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#122023] py-10 text-white xxs:space-x-3 xxs:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {menuItemsFooter.map((menuItem) => (
            <div key={menuItem.label}>
              <h2 className="mb-4 text-xl text-[#8EBBC5]">{menuItem.label}</h2>
              <ul>
                {/* Affichage des sous-items si présents */}
                {menuItem.subItems ? (
                  menuItem.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link href={subItem.href} className="hover:underline">
                        {subItem.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li key={menuItem.label}>
                    {/* Si pas de sous-items, affichage du lien principal */}
                    <Link href={menuItem.href} className="hover:underline">
                      {menuItem.label}
                    </Link>
                  </li>
                )}
              </ul>
              <div className="flex flex-col justify-end">
            <SocialButton className="" />
          </div>
            </div>
          ))}
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
};

export default Footer;
