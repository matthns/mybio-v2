import { LayoutRoot } from "@/app/components/LayoutRoot";
import { ElementType } from "react";
import { BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiSolidGraduation } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";



type educationItemProps = {
  id: string;
  level: string;
  college: string;
  course: string;
};

type stackProps = {
  id: string,
  icon: ElementType,
  label: string
}

const educationItem: educationItemProps[] = [
  {
    id: "1",
    level: "Ensino Superior",
    college: "Unicesumar",
    course: "Análise e Desenvolvimento de Sistemas",
  },
  {
    id: "2",
    level: "Curso",
    college: "Ada Tech",
    course: "Desenvolvimento Front-end",
  },
  {
    id: "3",
    level: "Curso",
    college: "Escola do Trabalhador",
    course: "Administrador TI Azure",
  },
];

const stack: stackProps[] = [
  { id:"0", icon:BiLogoHtml5, label:"HTML5"},
  {id:"1", icon:BiLogoCss3, label:"CSS3"},
  {id:"2", icon:BiLogoJavascript, label:"Javascript"},
  {id:"3", icon:BiLogoTypescript, label:"Typescript"},
  {id:"4", icon:BiLogoJava, label:"Java"},
  {id:"5", icon:FaDatabase, label:"SQL"},
  {id:"6", icon:BiLogoTailwindCss, label:"Tailwind"},
  {id:"7", icon:SiStyledcomponents, label:"Styled"},
  {id:"8", icon:BiLogoReact, label:"React.js"},
  {id:"9", icon:TbBrandNextjs, label:"Next.js"},
  {id:"10", icon:BiLogoFigma, label:"Figma"},
  {id:"11", icon:BiLogoGit, label:"Git"},
]

const it:stackProps[] = [
  /** descrever habilidades IT */
]


export default function About() {
  return (
    <LayoutRoot>
    <main
      className="w-full min-h-[100%] flex flex-col gap-[2.938rem]"
      id="about"
    >
      <h1 className="text-center text-[28px]">Sobre mim</h1>
      <p className="text-center px-[1.25rem]">
        Desde os meus criança fui apaixonado por tecnologia, sempre observador
        buscava compreender como as coisas funcionavam, essa paixão que me guia
        diariamente nessa longa estrada de 8 anos de experiência no campo da
        tecnologia da informação. Ao longo desse período, enfrentei diversos
        desafios que me proporcionaram uma ampla bagagem de conhecimentos,
        especialmente em relação a servidores e programação.
      </p>
      <div className="bg-[#EFEFEF] w-screen mx-auto h-1/2 py-[1.25rem]">
        <ul className="px-[1.25rem]">
          <h3 className="text-left font-semibold text-[#666666] pb-[2.5rem]">Educação</h3>
          {educationItem.map((x) => (
            <li
              key={x.course}
              className="flex items-center text-[#666666] gap-[1.25rem]"
            >
              <i className="text-[3.125rem] ">
                <BiSolidGraduation />
              </i>
              <div>
                <h4>{x.level}</h4>
                <h4>{x.college}</h4>
                <h4 className="font-semibold">{x.course}</h4>
              </div>
            </li>
          ))}
        </ul>
        <ul className="pt-[2.5rem] px-[1.25rem]">
          <h1 className="font-semibold text-[#666666]">Habilidades Dev</h1>
          <div className="pt-[1.25rem] flex flex-wrap gap-[0.625rem]">
            {stack.map(x => (
              <li key={x.label} className="p-2 rounded-md bg-white text-[#666666] w-[4rem] h-[4rem] flex flex-col items-center justify-center flex-wrap">
                <div className="flex flex-col items-center justify-center">
                  <i className="text-[1.5rem]">
                  <x.icon />
                  </i>
                  <p className="text-[0.625rem]">{x.label}</p>
                </div>
              </li>
            ))}
            </div>
        </ul>
      </div>
    </main>
    </LayoutRoot>
  );
}
