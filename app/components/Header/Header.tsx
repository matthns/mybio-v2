"use client";
import Link from "next/link";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

type menuItemsProps = {
  id: String;
  label: string;
  href: string;
};

const menuItems: menuItemsProps[] = [
  { id: "0", label: "Início", href: "#welcome" },
  { id: "1", label: "Sobre", href: "#about" },
  { id: "2", label: "Projetos", href: "#projects" },
  { id: "3", label: "Contato", href: "#contact" },
];

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className="fixed inset-0 px-[1.875rem] w-full flex justify-between lg:justify-normal gap-[6.25rem] items-center h-24 z-50">
      <a href="#welcome">
        <Logo />
      </a>

      <button
        className={`text-4xl relative right-0 z-50 ${
          isMenuOpen ? "text-white" : ""
        } lg:hidden`}
        onClick={handleMenu}
      >
        {isMenuOpen ? <BiX /> : <BiMenu />}
      </button>

      <nav
        className={`font-regular ${
          isMenuOpen
            ? "absolute h-[100svh] inset-0 bg-black text-white"
            : "hidden lg:block"
        }`}
      >
        <ul className="h-full w-full flex flex-col items-center justify-center gap-[2.188rem] lg:flex-row">
          {menuItems.map((x) => (
            <li
              key={x.label}
              className={`rounded-full px-3 py-2 hover:transition-300 hover:text-black hover:bg-white lg:hover:bg-black lg:hover:text-white`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Link href={x.href}>{x.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
