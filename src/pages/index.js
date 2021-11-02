import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

import MainLayout from "../components/layout"
import QuoteAbrahamCalsin from "../components/quote-abrahamcalsin"

const SocialMediaStyles = (props) => {
  const { href, logoSrc, alt } = props

  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className="bg-secondary w-12 rounded-rds-1.1 shadow-sm inline-block py-1.5 px-2.2 transition duration-300 hover:opacity-80 sm:w-13"
      >
        <img src={logoSrc} alt={alt} className="w-full block" />
      </a>
    </Link>
  )
}

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>Abraham Calsin</title>
      </Head>

      <div className="max-w-70">
        <div className="text-center sm:flex flex-row-reverse sm:text-left sm:pt-11.2">
          <div className="w-25 max-w-full mx-auto pb-3 sm:w-35.5">
            <Image
              src="/images/abraham-calsin-picture.png"
              alt="Abraham Calsin"
              className="w-full"
              width={512}
              height={512}
            />
          </div>

          <div className="w-710px">
            <h3 className="text-xs-1.2 font-medium tracking-ltr-1 sm:text-xsm-1.1">
              BIENVENIDO A MI PORTAFOLIO
            </h3>

            <div className="bg-primary w-13 h-0.2 mx-auto my-0.7 sm:m-0 sm:my-1 sm:h-0.5 sm:w-25.5"></div>

            <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
              {"{"}Abraham Calsin{"}"}
            </h1>

            <p className="text-base font-medium mt-0.7 sm:px-0 sm:text-xl leading-1.7 sm:leading-9">
              Hey, hola! Soy un desarrollador frontend, apasionado por la programación,
              creo proyectos de código abierto.
            </p>

            <div className="flex justify-center sm:justify-start gap-1.7 mt-3.7">
              <SocialMediaStyles
                href="https://github.com/abrahamcalsin"
                logoSrc="/icons/github_icon.svg"
                alt="GitHub"
              />
              <SocialMediaStyles
                href="https://www.linkedin.com/in/abrahamcalsin/"
                logoSrc="/icons/linkedin_icon.svg"
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>

        <QuoteAbrahamCalsin />
      </div>
    </MainLayout>
  )
}
export default Home