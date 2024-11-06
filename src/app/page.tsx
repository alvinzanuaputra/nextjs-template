import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"
import { Tooltip } from "@/components/ui/Tooltip"

export default function Home() {
    return (
        <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-center gap-2">
                <h1 className="text-center md:text-4xl">
                    Ready to use template <br className="hidden sm:inline" />
                    built using TailwindCSS & Typescript
                </h1>
                <p className="max-w-[512px] text-center text-accent">
                    Accessible and customizable components, file structures,
                    developer environment, and much more!
                </p>
            </div>
            <div className="flex gap-4">
                <Tooltip content={siteConfig.links.github}>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={siteConfig.links.github}
                        className={buttonVariants({
                            variant: "default",
                            size: "sm",
                        })}
                    >
                        Github
                    </Link>
                </Tooltip>

                <Tooltip content="See Full Docs">
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={siteConfig.links.github}
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                        })}
                    >
                        Docs
                    </Link>
                </Tooltip>
            </div>
        </section>
    )
}
