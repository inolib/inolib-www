"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { menuItems } from "~/DATA/links";

interface MainNavProps {
  hoverClass: string;
  hoverBorder: string;
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

  const handleClick = (
    menu: string,
    hasSubItems: boolean,
    e: React.MouseEvent | React.KeyboardEvent | React.KeyboardEvent,
  ) => {
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
      className="ml-auto h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );


  const renderArrow = (menu: string) => (
    <svg
      className={`ml-2 h-4 w-4 transition-transform duration-300 ${openMenu === menu ? "rotate-180 transform" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <nav className="ml-16 hidden px-2 py-6 lg:block">
      <ul className="flex space-x-12 font-sans">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="menu-item group relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            role="none"

          >
             {item.subItems ? (
            <div
              className={`flex cursor-pointer items-center pb-2 ${hoverClass}`}
              role={"button"}
              aria-haspopup={item.subItems ? undefined: undefined}
              aria-expanded={item.subItems && openMenu === item.label ? undefined : undefined}
              onClick={(e) => handleClick(item.label, !!item.subItems, e)}
              onKeyDown={(e) => handleKeyDown(item.label, !!item.subItems, e)}
              aria-label={item.subItems ? `${item.label}, ${openMenu === item.label ? "ouvert" : "fermé"}` : `${item.label}`}
              tabIndex={0}

            >

                <span className={`flex items-center ${hoverBorder} hover:border-b-[1.5px]`} aria-hidden='true'>
                  {item.label}
                  {renderArrow(item.label)}
                </span>
                </div>
              ) : (
                <Link href={item.href} className={`flex items-center ${hoverBorder} hover:border-b-[1.5px]`}>
                  {item.label}
                </Link>
              )}



            {openMenu === item.label && item.subItems && (
              <ul
                id={`submenu-${item.label}`}
                className="absolute left-0 mt-2 w-48 rounded-lg bg-white text-black opacity-100 shadow-lg transition-opacity duration-300"
                role="menu"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                aria-label={`${item.label} sous-menu`}
              >
                {item.subItems.map((subItem, idx) => (
                  <li key={subItem.label}>
                    <Link
                      href={subItem.href}
                      className={`flex items-center px-4 py-2 hover:bg-gray-200 ${
                        idx < (item.subItems ?? []).length - 1 ? "border-b border-gray-300" : ""
                      }`}
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
