import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { menuItems } from "~/DATA/links";
import { useRouter } from "next/navigation";
import{ Button}  from "~/components/UI/Button";
type MenuProps = {
  navMenu: string;
  buttonVariant: "ButtonJaune" | "buttonNoir" | "outline" | "secondary" | "ghost" | "link" | "buttonNoirOutline";
};


const BurgerMenu = ({ navMenu, buttonVariant }: MenuProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  // Ouvre ou ferme un sous-menu
  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Ouvre ou ferme le menu principal
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setOpenMenu(null);
    setIsMenuOpen(false);
  };

  // Gestion des touches Entrée et Espace pour ouvrir/fermer le menu
  const handleKeyDownMenu = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Empêche le comportement par défaut
      toggleMenu(); // Ouvre ou ferme le menu principal
    }
  };

  const handleKeyDownSubMenu = (event: React.KeyboardEvent, menu?: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Empêche le comportement par défaut
      if (menu) {
        handleMenuClick(menu); // Ouvre ou ferme le sous-menu
      }
    } else if (event.key === "Escape") {
      closeMenu(); // Ferme le menu avec Échap
    }
  };
  const handleLink = ()=> {
    router.push('/Contact')
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".burger-menu")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="burger-menu flex items-center relative">
      <button
        onClick={toggleMenu} // Gestion du clic
        onKeyDown={handleKeyDownMenu} // Gestion du clavier pour Enter/Espace
        className="mt-2 lg:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="menu-content"

      >
        <Image src={navMenu} alt="" width={40} height={40} />
      </button>

      {isMenuOpen && (
        <div
          id="menu-content"
          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg p-4 shadow-lg z-10"
          role="none"
          aria-labelledby="menu-trigger"
        >
          <div className="text-lg font-bold text-black">Menu</div>
          <hr className="my-2" aria-hidden="true"/>

          {/* Parcours des éléments de menu principaux */}
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.subItems ? (

                <div
                  className="flex w-full cursor-pointer items-center justify-between py-2 text-black"
                  onClick={() => handleMenuClick(item.label)}
                  onKeyDown={(event) => handleKeyDownSubMenu(event, item.label)}
                  tabIndex={0}
                  role="link"


                  aria-label={`${item.label}, ${openMenu === item.label ? "ouvert" : "fermé"}`}
                >
                  {item.label}
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      openMenu === item.label ? "rotate-180 transform" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              ) : (
                // Pour les items sans sous-menus : un lien normal
                <Link href={item.href} className="block py-2 text-black">
                  {item.label}
                </Link>
              )}

              {/* Sous-menus dynamiques */}
              {openMenu === item.label && item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.label} href={subItem.href} className="block py-1 text-black">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
              <hr className="my-2" aria-hidden="true"/>
            </div>
          ))}

          <div className="py-2">
          <Button
        variant={"buttonNoir"}

        onClick={handleLink}
        className="mr-8 w-72"
      >
        Nous contacter
      </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
