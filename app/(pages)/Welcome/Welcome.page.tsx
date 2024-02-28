import Image from "next/image";
import { ElementType } from "react";
import { BiChevronDown, BiLogoGmail, BiLogoLinkedin, BiLogoMicrosoftTeams } from "react-icons/bi";

type socialItemsProps = {
    id: string, label: string, href:string, icon:ElementType
}

const socialItems:socialItemsProps[] =[
    {id:"1", label:"E-mail", href:"#", icon:BiLogoGmail},
    {id:"2", label:"LinkedIn", href:"#", icon:BiLogoLinkedin},
    {id:"3", label:"Teams", href:"#", icon:BiLogoMicrosoftTeams}
]

export default function Welcome(){
    return (
        <main className="w-full min-h-[100%] flex flex-col items-center justify-evenly lg:justify-center lg:gap-[50px]" id="welcome">
            <div className="flex flex-col items-center gap-[40px] lg:flex-row lg:justify-between lg:w-full md:gap-[71px]">
            <Image src={'/assets/img/profile.png'} width={200} height={200} alt="It's me" className="lg:order-3 lg:w-[300px] lg:h-[300px]" />
            <h1 className="text-[32px] text-center font-light leading-tight md:w-[480px] lg:text-[48px] lg:text-left lg:order-2">
                Olá, me chamo Matheus Nascimento e sou Desenvolvedor Front-end
                </h1>
            <div className="lg:order-1">
                <ul className="flex flex-row gap-[30px] lg:flex-col">
                {socialItems.map(x => (
                    <li key={x.label} className="text-[30px] p-2 rounded-full hover:bg-black hover:text-white md:text-[50px] ">
                        <a href={x.href}><x.icon /></a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            <a href="#about" className="text-[50px] animate-bounce">
                <BiChevronDown />
            </a>
        </main>
    )
}