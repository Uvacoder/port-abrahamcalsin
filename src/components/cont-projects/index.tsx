import dayjs from "dayjs"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = (props: any) => {
  const {
    titleProject,
    descriptionProject,
    tagLanguajes,
    hrefProjectDemo,
    hrefProjectCode,
    dateProject = new Date(),
  } = props

  const projectFormatDate = "D MMM, YYYY"

  return (
    <div className="flex gap-2.2 sm:gap-3.7 mb-6.5">
      <div>
        <div className="relative text-xs-1.1 sm:text-xs text-white italic bg-primary h-3 w-8 sm:w-12 px-0 py-0.7 sm:py-2 flex items-center justify-center rounded-rds-0.1 after:[' '] after:absolute after:-right-2.5 after:bg-transparent after:border-l-transparent after:border-r-transparent after:border-t-primary after:border-b-transparent after:border-l-9 after:border-r-9 after:border-t-12 after:border-b-12 after:transform after:-rotate-90">
          <span>{dayjs(dateProject).format(projectFormatDate)}</span>
        </div>
      </div>

      <div className="-mt-0.7">
        <h1 className="leading-1.2 sm:leading-normal text-xsm-1.3 sm:text-3xl font-extraBold">
          {titleProject}
        </h1>

        <div className="flex items-center text-secondary-600 text-xs sm:text-sm">
          <span className="transform -scale-x-1 mr-1 text-xs-1.3 sm:text-xs">
            <FontAwesomeIcon icon={faTags} />
          </span>{" "}
          <p className="font-extraBold">{tagLanguajes}</p>
        </div>

        <p className="text-sm sm:text-xl font-medium">{descriptionProject}</p>

        <a
          href={hrefProjectDemo}
          target="__blank"
          rel="noreferrer"
          className="underline font-extraBold mr-1 mt-1 inline-block bg-secondary py-1 px-2 rounded-rds-1.1 shadow-sm text-xs-1.3 transition duration-300 hover:opacity-80 sm:text-sm"
        >
          VER DEMO{" "}
          <span className="text-xs ml-px">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>

        {hrefProjectCode ? (
          <a
            href={hrefProjectCode}
            target="__blank"
            rel="noreferrer"
            className="underline font-extraBold mt-1 inline-block bg-secondary py-1 px-2 rounded-rds-1.1 shadow-sm text-xs-1.3 transition duration-300 hover:opacity-80 sm:text-sm"
          >
            VER CÓDIGO{" "}
            <span className="text-xs ml-px">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        ) : null}
      </div>
    </div>
  )
}

const ContProjects = () => {
  return (
    <div className="relative my-5.5 sm:my-9.5 timeline">
      <Project
        dateProject={new Date("09/22/2021")}
        titleProject="Tasks List"
        tagLanguajes="React.js, Tailwind."
        descriptionProject="Tasks List is an open source web application that allows you to manage your day to day tasks. Create new tasks, mark them as completed and even delete them."
        hrefProjectDemo="https://tasks-list.abrahamcalsin.com"
        hrefProjectCode="https://github.com/abrahamcalsin/task-list"
      />
      <Project
        dateProject={new Date("09/03/2021")}
        titleProject="Munay Mikhuy Anka"
        tagLanguajes="Next.js, Sass"
        descriptionProject="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
        hrefProjectDemo="https://munay-mikhuy-anka.abrahamcalsin.com"
        hrefProjectCode="https://github.com/abrahamcalsin/munay-mikhuy-anka"
      />
      <Project
        dateProject={new Date("08/27/2021")}
        titleProject="Páginas Web Ganadoras"
        tagLanguajes="HTML, CSS, JavaScript"
        descriptionProject="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
        hrefProjectDemo="https://paginas-web-ganadoras.abrahamcalsin.com"
        hrefProjectCode="https://github.com/abrahamcalsin/paginas-web-ganadoras"
      />
      <Project
        dateProject={new Date("08/24/2021")}
        titleProject="Cyber Security Tech"
        tagLanguajes="HTML, CSS, JavaScript"
        descriptionProject="Cyber Security Tech, es un template y/o maqueta, open source."
        hrefProjectDemo="https://cyber-security-tech.abrahamcalsin.com"
        hrefProjectCode="https://github.com/abrahamcalsin/cyber-security-tech"
      />
      <Project
        dateProject={new Date("06/09/2021")}
        titleProject="Motivación"
        tagLanguajes="HTML, CSS, JavaScript"
        descriptionProject="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
        hrefProjectDemo="https://motivation-image.abrahamcalsin.com"
      />
      <Project
        dateProject={new Date("05/13/2021")}
        titleProject="Shadow"
        tagLanguajes="HTML, CSS, JavaScript"
        descriptionProject="Shadow is an open source library, which allows a designer to choose modern shadows."
        hrefProjectDemo="https://shadow.abrahamcalsin.com"
        hrefProjectCode="https://github.com/abrahamcalsin/shadow"
      />
    </div>
  )
}

export default ContProjects