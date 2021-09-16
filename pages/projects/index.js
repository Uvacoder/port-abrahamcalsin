import * as dayjs from "dayjs";
import React from "react";
import clsx from "clsx";
import MainLayout from "../../components/layout";
import Head from "next/head";
// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ContentProject = (props) => {
  const projectFormatDate = "D MMM, YYYY";
  const {
    dateProject = new Date(),
    titleProject,
    descriptionProject,
    tagLanguajes,
    hrefProjectDemo,
  } = props;

  return (
    <div className="flex gap-6 sm:gap-10 mb-17">
      <div>
        <div className="relative text-xs-1.1 sm:text-xs text-white italic bg-primary h-8 sm:h-10 w-21 sm:w-32 px-0 py-0 sm:py-5 flex items-center justify-center rounded-rds-0.1 after:[' '] after:absolute after:-right-7 after:bg-transparent after:border-l-transparent after:border-r-transparent after:border-t-primary after:border-b-transparent after:border-l-9 after:border-r-9 after:border-t-12 after:border-b-12 after:transform after:-rotate-90">
          <span>{dayjs(dateProject).format(projectFormatDate)}</span>
        </div>
      </div>
      <div className="mt-0 sm:-mt-2">
        <h1 className="leading-1.2 sm:leading-normal text-xsm-1.3 sm:text-3xl font-extraBold">
          {titleProject}
        </h1>
        <div className="flex items-center text-secondary-600 border-1 border-sec text-xs sm:text-sm">
          <span className="transform -scale-x-1 mr-1.5 text-xs-1.3 sm:text-xs">
            <FontAwesomeIcon icon={faTags} />
          </span>{" "}
          <p className="font-extraBold">{tagLanguajes}</p>
        </div>
        <p className="text-sm sm:text-xl font-medium">{descriptionProject}</p>
        <a
          href={hrefProjectDemo}
          target="__blank"
          rel="noreferrer"
          className="underline font-extraBold mt-3 inline-block bg-secondary py-3 px-5 rounded-rds-1.1 shadow-sm text-xs-1.3 transition duration-300 hover:opacity-80 sm:text-sm"
        >
          VER DEMO{" "}
          <span className="text-xs ml-1">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <MainLayout>
      <Head>
        <title>Proyectos - Abraham Calsin</title>
      </Head>
      <div className="mt-0 sm:mt-20 sm:mb-10">
        <div className="bg-primary w-25 h-1-2 my-2 sm:m-0 sm:mb-3 sm:h-2-6 sm:w-35"></div>
        <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
          {"{"}Proyectos{"}"}
        </h1>
        <p className="text-sm leading-loose font-medium mt-2 px-0 sm:text-xl">
          En esta sección puedes ver algunos de mis proyectos más destacados. También
          puedes ver todos los códigos en mi{" "}
          <a
            href="https://github.com/abrahamcalsin"
            target="__blank"
            rel="noreferrer"
            className="font-bold underline"
          >
            GitHub.
          </a>
        </p>
        <div className="relative my-15 sm:my-25 before:[' '] before:absolute before:bg-primary before:top-0 before:left-10 sm:before:left-16 before:h-full before:w-2">
          <ContentProject
            dateProject={new Date("09/03/2021")}
            titleProject="Munay Mikhuy Anka"
            tagLanguajes="Next.js, Sass"
            descriptionProject="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
            hrefProjectDemo="https://munay-mikhuy-anka.abrahamcalsin.com"
          />
          <ContentProject
            dateProject={new Date("08/27/2021")}
            titleProject="Páginas Web Ganadoras"
            tagLanguajes="HTML5, CSS, JavaScript"
            descriptionProject="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
            hrefProjectDemo="https://paginas-web-ganadoras.abrahamcalsin.com"
          />
          <ContentProject
            dateProject={new Date("08/24/2021")}
            titleProject="Cyber Security Tech"
            tagLanguajes="HTML5, CSS, JavaScript"
            descriptionProject="Cyber Security Tech, es un template y/o maqueta, open source."
            hrefProjectDemo="https://cyber-security-tech.abrahamcalsin.com"
          />
          <ContentProject
            dateProject={new Date("06/09/2021")}
            titleProject="Motivación"
            tagLanguajes="HTML5, CSS, JavaScript"
            descriptionProject="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
            hrefProjectDemo="https://motivation-image.abrahamcalsin.com"
          />
          <ContentProject
            dateProject={new Date("05/13/2021")}
            titleProject="Shadow"
            tagLanguajes="HTML5, CSS, JavaScript"
            descriptionProject="Shadow is an open source library, which allows a designer to choose modern shadows."
            hrefProjectDemo="https://shadow.abrahamcalsin.com"
          />
        </div>
        <div className="w-full flex justify-center mb-12 md:mb-12">
          <a
            href="https://github.com/abrahamcalsin"
            className="text-xs-1.3 group px-7 py-4 bg-secondary shadow-sm rounded-rds-1.1 font-extraBold hoverChild transition duration-300 hover:opacity-80 md:text-sm md:px-7 md:py-5"
            target="_blank"
          >
            VER MÁS EN MI GITHUB{" "}
            <span className="text-base ml-2-6 md:group-hover:ml-3 md:text-xl">
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};
export default Projects;
