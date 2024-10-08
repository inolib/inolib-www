"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { menuItems } from "~/DATA/links";

interface MainNavProps {
  hoverBorder: string;
  hoverClass: string;
}

const MainNav = ({ hoverClass, hoverBorder }: MainNavProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const handleClick = (menu: string, hasSubItems: boolean, e: React.KeyboardEvent | React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setOpenMenu(openMenu === menu ? null : menu);
    }
  };

  const handleKeyDown = (menu: string, hasSubItems: boolean, e: React.KeyboardEvent) => {
    if (hasSubItems && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      handleClick(menu, hasSubItems, e);
    }
  };

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null); // Fermer le menu quand "Échap" est pressé
      }
    };

    // Ajout de l'écoute de l'événement 'keydown'
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && !target.closest(".menu-item")) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Chevron icon pour sou-menu
  const renderSubItemArrow = () => (
    <svg
      className="ml-auto size-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );

  const renderArrow = (menu: string) => (
    <svg
      className={`ml-2 size-4 transition-transform duration-300 ${openMenu === menu ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
  );

  return (
    <nav className="ml-16 hidden px-2 py-6 lg:block">
      <ul className="flex space-x-12 font-sans">
        {menuItems.map((item) => (
          <li
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className="menu-item group relative"
            key={item.label}
            role="none"
          >
            {item.subItems ? (
              <div
                onClick={(e) => handleClick(item.label, !!item.subItems, e)}
                onKeyDown={(e) => handleKeyDown(item.label, !!item.subItems, e)}
                aria-expanded={item.subItems && openMenu === item.label ? undefined : undefined}
                aria-haspopup={item.subItems ? undefined : undefined}
                aria-label={
                  item.subItems ? `${item.label}, ${openMenu === item.label ? "ouvert" : "fermé"}` : `${item.label}`
                }
                className={`flex cursor-pointer items-center pb-2 ${hoverClass}`}
                role={"button"}
                tabIndex={0}
              >
                <span aria-hidden="true" className={`flex items-center ${hoverBorder} hover:border-b-[1.5px]`}>
                  {item.label}
                  {renderArrow(item.label)}
                </span>
              </div>
            ) : (
              <Link className={`flex items-center ${hoverBorder} hover:border-b-[1.5px]`} href={item.href}>
                {item.label}
              </Link>
            )}

            {openMenu === item.label && item.subItems && (
              <ul
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                className="absolute left-0 mt-2 w-48 rounded-lg bg-white text-black opacity-100 shadow-lg transition-opacity duration-300"
                id={`submenu-${item.label}`}
                role="none"
              >
                {item.subItems.map((subItem, idx) => (
                  <li key={subItem.label}>
                    <Link
                      className={`flex items-center px-4 py-2 hover:bg-gray-200 ${
                        idx < (item.subItems ?? []).length - 1 ? "border-b border-gray-300" : ""
                      }`}
                      href={subItem.href}
                    >
                      <span>{subItem.label}</span>
                      {renderSubItemArrow()}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
