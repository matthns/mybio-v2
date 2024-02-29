import { BiSolidGraduation } from "react-icons/bi";

type educationItemProps = {
  id: string;
  level: string;
  college: string;
  course: string;
};

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

export default function About() {
  return (
    <main
      className="w-full min-h-[100%] flex flex-col justify-evenly"
      id="about"
    >
      <h1 className="text-center text-[28px]">Sobre mim</h1>
      <p className="pt-[1.563rem] text-center">
        Desde os meus criança fui apaixonado por tecnologia, sempre observador
        buscava compreender como as coisas funcionavam, essa paixão que me guia
        diariamente nessa longa estrada de 8 anos de experiência no campo da
        tecnologia da informação. Ao longo desse período, enfrentei diversos
        desafios que me proporcionaram uma ampla bagagem de conhecimentos,
        especialmente em relação a servidores e programação.
      </p>
      <div className="bg-[#EFEFEF] w-screen mx-auto h-1/2">
        <h3 className="text-left font-semibold text-[#666666]">Educação</h3>

        <ul>
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
      </div>
    </main>
  );
}
