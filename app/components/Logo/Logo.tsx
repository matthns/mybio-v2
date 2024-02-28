import Image from "next/image"

export const Logo = () => {
    return (
        <Image src={'/assets/img/logo-black.png'} width={65} height={45} alt="Logo" />
    )
}