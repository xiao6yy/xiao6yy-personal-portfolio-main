import Head from 'next/head'
import Intro from "@/components/Intro"
import SectionDivider from "@/components/SectionDivider"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import { isMobileDevice } from "@/lib/utils"
// import Contact from "@/components/Contact"

export const metadata = {
    title: "Xiao6yy | Homepage",
    description: "I am happy.",
}

export default function Home() {
    const isMobile = isMobileDevice()

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
                {/* 在这里添加 favicon 图标 */}
                <link rel="icon" href="/icon1.ico" type="image/png"/>

            </Head>
            <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
                <Intro />
                <SectionDivider />
                <About />
                <Projects />
                <Skills />
                <Experience isMobile={isMobile} />
                {/* <Contact /> */}
            </main>
        </>
    )
}
