import { LayoutRoot } from "@/app/components/LayoutRoot";
import Image from "next/image";
import { ElementType } from "react";
import {
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoMicrosoftTeams,
} from "react-icons/bi";
import { BsChevronCompactDown } from "react-icons/bs";

type socialItemsProps = {
  id: string;
  label: string;
  href: string;
  icon: ElementType;
};

const socialItems: socialItemsProps[] = [
  { id: "1", label: "E-mail", href: "#", icon: BiLogoGmail },
  { id: "2", label: "LinkedIn", href: "#", icon: BiLogoLinkedin },
  { id: "3", label: "Teams", href: "#", icon: BiLogoMicrosoftTeams },
];

export default function Welcome() {
  return (
    <LayoutRoot>
      <main className="h-full w-full flex flex-col justify-around">
        <div className="flex justify-center">
          <Image
            src={`/assets/img/profile.png`}
            width={200}
            height={200}
            alt="It's me"
            className=""
          />
        </div>
        <div className="flex justify-center">
          <h1 className="w-[20.25rem] text-[2rem] font-light text-center">
            Olá, me chamo Matheus Nascimento e sou Desenvolvedor Front-end
          </h1>
        </div>
        <ul className="flex flex-row gap-8 justify-center">
          {socialItems.map((x) => (
            <li
              key={x.label}
              className="text-5xl p-2 cursor-pointer hover:rounded-full hover:bg-black hover:text-white"
            >
              <x.icon />
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <a href="#about" className="text-5xl animate-bounce">
            <BsChevronCompactDown />
          </a>
        </div>
      </main>
    </LayoutRoot>
  );
}
