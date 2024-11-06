import { FC } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/ui/Button"
import { Icons } from "@/ui/Icons"
import { Tooltip } from "@/ui/Tooltip"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Tooltip content="Template">
                        <Link href="/" className="flex items-center space-x-2">
                            <Icons.logo className="h-6 w-6" />
                            <span className="inline-block font-bold">
                                {siteConfig.name}
                            </span>
                        </Link>
                    </Tooltip>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Tooltip content={siteConfig.links.github}>
                            <Link
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div
                                    className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost",
                                    })}
                                >
                                    <Icons.gitHub className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </div>
                            </Link>
                        </Tooltip>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
