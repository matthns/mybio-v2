import { FC, ReactNode } from "react"

interface LayoutRootProps {
	children: ReactNode
}

export const LayoutRoot: FC<LayoutRootProps> = ({ children }) => {
	return (
        <main className="w-screen max-w-screen-2xl h-[100svh] mx-auto px-[30px] py-[30px] md:px-[60px] lg:py-[60px] lg:px-[100px]">{children}</main>
	)
}