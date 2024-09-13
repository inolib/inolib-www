"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { menuItems } from "~/DATA/links";

const MainNav = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (!openMenu) {
      setOpenMenu(menu);
    }
  };

  const handleMouseLeave = (menu: string) => {
    if (!openMenu) {
      setOpenMenu(null);
    }
  };

  const handleClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
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

  const handleKeyDown = (event: React.KeyboardEvent, menu: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(menu);
      event.preventDefault();
    }
  };

  return (
    <>
      <nav className="hidden px-2 py-6 lg:block ml-12">
        <ul className="flex space-x-12 font-sans 2xl:space-x-16">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="menu-item group relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={() => handleMouseLeave(item.label)}
            >
              <div className="flex cursor-pointer items-center" aria-haspopup={item.subItems ? "true" : "false"}>
                <Link href={item.href} className="hover:" aria-label={`Lien vers ${item.label}`}>
                  {item.label}
                </Link>
                {item.subItems && (
                  <div
                    onClick={() => handleClick(item.label)}
                    onKeyDown={(event) => handleKeyDown(event, item.label)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openMenu === item.label}
                    aria-label={` ${item.label} menu`}
                  >
                    {renderArrow(item.label)}
                  </div>
                )}
              </div>
              {openMenu === item.label && item.subItems && (
                <div
                  className="absolute left-0 mt-2 w-48 rounded-lg bg-white text-black opacity-100 shadow-lg transition-opacity duration-300"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                  role="menu"
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-200"
                      role="menuitem"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
