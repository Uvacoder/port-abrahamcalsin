import Link from "next/link"
import Head from "next/head"

import MainLayout from "~/components/layout"

const ContactSocialMedia = (props: any) => {
  const { href, iconSocialSrc, alt, contentSpan, contentLinkIcons } = props

  return (
    <li className="flex items-center my-0.7 sm:text-xsm-1.2 text-sm">
      <img src={iconSocialSrc} className="w-2.2 sm:w-2.5" alt={alt} />
      <span className="font-extraBold sm:mx-1">{contentSpan}</span>
      <a href={href} target="_blank" rel="noreferrer" className="underline">
        {contentLinkIcons}
      </a>
    </li>
  )
}

const AboutMe = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sobre Mi - Abraham Calsin</title>
      </Head>

      <div className="mt-0 sm:mt-11.2 sm:mb-3.7">
        <div className="bg-primary w-9.5 h-0.2 my-0.7 sm:m-0 sm:mb-1 sm:h-0.5 sm:w-13"></div>

        <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
          {"{"}Sobre Mi{"}"}
        </h1>

        <p className="text-sm leading-1.7 font-medium mt-0.7 px-0 sm:text-xl sm:leading-9">
          Hey, hola! Soy Abraham Calsin un individuo autodidacta, me apasiona la
          programación, actualmente me desempeño como desarrollador frontend, creo
          proyectos de código abierto, escribo en JavaScript moderno, React.js, Next.js y
          TypeScript.
        </p>
        <p className="text-sm leading-1.7 font-medium mt-0.7 px-0 sm:text-xl sm:leading-9">
          Me fascina el asunto del trabajo en equipo, a lo largo de mi aventura en el
          mundo del desarrollo web, me involucre en el desarrollo de varios proyectos,
          proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al
          desarrollar un Sitio Web. Puedes ver mi trabajo en la sección de
          <Link href="/projects">
            <a className="font-bold underline ml-0.7">Proyectos.</a>
          </Link>
        </p>

        <p className="font-semiBold text-xsm-1.2 sm:text-xsm-1.3 mt-5.5 sm:mt-6.5">
          ¿Te interesa lo que hago?, ¡Trabajemos juntos!.
          <span className="block mt-0.7 relative font-bold before:content-[' '] before:inline-block before:h-0.5 before:w-3.5 sm:before:w-3.7 before:mb-0.5 sm:before:mb-0.7 before:mr-0.7 before:rounded-rds-1.1 before:bg-primary">
            Contáctame:
          </span>
        </p>

        <div className="font-semiBold my-1 mb-5.5 sm:mb-0">
          <ContactSocialMedia
            iconSocialSrc="/icons/email.svg"
            alt="Email"
            contentSpan="Email:"
            contentLinkIcons="@abrahamcalsin"
            href="mailto:hello.abrahamcalsin@gmail.com"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/linkedin.svg"
            alt="LinkedIn"
            contentSpan="LinkedIn:"
            href="https://www.linkedin.com/in/abrahamcalsin"
            contentLinkIcons="@abrahamcalsin"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/twitter.svg"
            alt="Twitter"
            contentSpan="Twitter:"
            href="https://twitter.com/abraham_calsin"
            contentLinkIcons="@abraham_calsin"
          />
          <ContactSocialMedia
            iconSocialSrc="/icons/github.svg"
            alt="GitHub"
            contentSpan="GitHub:"
            href="https://github.com/abrahamcalsin"
            contentLinkIcons="@abrahamcalsin"
          />
        </div>
      </div>
    </MainLayout>
  )
}
export default AboutMe
