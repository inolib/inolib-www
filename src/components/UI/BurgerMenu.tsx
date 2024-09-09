import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/UI/DropDownMenu";
import Link from "next/link";
import { Button } from "~/components/UI/Button";
import Image from "next/image";
import { menuItems } from "~/DATA/links";

type MenuProps = {
  navMenu: string;
};

export default function BurgerMenu({ navMenu }: MenuProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const renderArrow = (menu: string) => (
    <svg
      className={`ml-1 h-4 w-4 transition-transform duration-300 ${openMenu === menu ? "rotate-180 transform" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger className="xss:ml-0 xxs:mt-6 xs:ml-4 md:ml-[370px] md:mt-6 lg:hidden xl:hidden">
          <Image src={navMenu} alt="" width={40} height={40} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 bg-white" sideOffset={5} align="center">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Parcours des éléments de menu principaux */}
          {menuItems.map((item) => (
            <div key={item.label}>
              <DropdownMenuItem asChild>
                <div
                  className="flex w-full cursor-pointer items-center justify-between"
                  onClick={(e) => {
                    e.preventDefault(); // Empêche la fermeture du menu
                    handleClick(item.label);
                  }}
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.subItems && <div>{renderArrow(item.label)}</div>}
                </div>
              </DropdownMenuItem>

              {/* Sous-menus dynamiques */}
              {openMenu === item.label && item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild>
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              )}
              <DropdownMenuSeparator />
            </div>
          ))}

          <DropdownMenuItem asChild>
            <Link href="/contact">
              <Button variant="buttonNoir">Nous contacter</Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
}
