import clsx from "clsx";
import MainLayout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const CardProyects = (props) => {
  const {
    hrefViewDemo,
    hrefViewCode,
    imageProyectSrc,
    alt,
    contentText_descript,
    contentText_viewDemo,
    contentText_viewCode,
    tagLanguajes,
  } = props;

  return (
    <div
      className={clsx(
        "bg-clrOptin-3 p-4 shadow-sm rounded-rds-3-desk transition duration-300 ease-in-out hover:transform hover:-translate-y-2"
      )}
    >
      <Image
        src={imageProyectSrc}
        alt={alt}
        className={clsx("rounded-rds-4-desk")}
        width={1278}
        height={946}
      />
      <div className={clsx("px-3")}>
        {tagLanguajes ? (
          <div className="flex items-center text-clrSecondary border-1 border-sec my-2">
            <p className="transform -scale-x-1 mr-1.5 text-size-3">
              <FontAwesomeIcon icon={faTags} />
            </p>{" "}
            <p className="font-bold text-size-4">{tagLanguajes}</p>
          </div>
        ) : null}
        <p className={clsx("text-justify text-size-4 sm:text-size-5")}>
          {contentText_descript}
        </p>
        <div
          className={clsx(
            "flex flex-col gap-3 justify-around items-center text-center my-4 sm:gap-4"
          )}
        >
          {contentText_viewDemo ? (
            <a
              href={hrefViewDemo}
              target="_blank"
              className={clsx(
                "flex items-center justify-center gap-3 w-full bg-clrOption-2 py-4 px-2 rounded-rds-1 text-size-2 font-extraBold transition duration-300 hover:opacity-80 sm:text-size-4"
              )}
            >
              {contentText_viewDemo}
              <Image width={12} height={12} src="/icons/external_link.svg" />
            </a>
          ) : null}

          {contentText_viewCode ? (
            <a
              href={hrefViewCode}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                "w-full bg-clrOption-2 py-4 px-7 rounded-rds-1 text-size-2 font-extraBold transition duration-300 hover:opacity-80 sm:text-size-4"
              )}
            >
              {contentText_viewCode}
            </a>
          ) : null}
        </div>
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
        <div className="bg-clrOption-1 w-25 h-1-2 my-2 sm:m-0 sm:mb-3 sm:h-2-6 sm:w-35"></div>
        <h1 className="font-extraBold text-size-6 sm:text-size-8.2-desk">
          {"{"}Proyectos{"}"}
        </h1>
        <p className="text-size-4 leading-loose font-medium mt-2 px-0 sm:text-size-8.1-desk">
          En esta sección podrás ver algunos de mis proyectos mas destacados.
        </p>
        <div className="my-15 grid grid-cols-pjectsCards gap-15  items-start sm:my-25 sm:gap-13">
          <CardProyects
            imageProyectSrc="/projects-cover/munay-mikhuy-anka.svg"
            alt="Motivation"
            tagLanguajes="Next.js, Scss"
            contentText_descript="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
            hrefViewDemo="https://munay-mikhuy-anka.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/munay-mikhuy-anka"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/motivation-cover.svg"
            alt="Motivation"
            tagLanguajes="HTML, CSS, JavaScript"
            contentText_descript="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
            hrefViewDemo="https://motivation-image.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/shadow-cover.svg"
            alt="Shadow"
            tagLanguajes="HTML, CSS, JavaScript"
            contentText_descript="Shadow es una biblioteca de código abierto, que permite a un
            diseñador elegir sombras modernas."
            hrefViewDemo="https://shadow.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/shadow"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/cyber-security-tech-cover.svg"
            alt="Cyber Security Tech - Abraham Calsin"
            tagLanguajes="HTML, CSS, JavaScript"
            contentText_descript="Cyber Security Tech, es un template y/o maqueta, open source."
            hrefViewDemo="https://cyber-security-tech.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/cyber-security-tech"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/paginas-web-ganadoras-cover.svg"
            alt="Páginas Web Ganadoras"
            tagLanguajes="HTML, CSS, JavaScript"
            contentText_descript="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
            hrefViewDemo="https://paginas-web-ganadoras.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/paginas-web-ganadoras"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/free-only-webinar-cover.svg"
            alt="Free Only Webinar"
            tagLanguajes="HTML, CSS"
            contentText_descript="Free Only Webinar, es un template y/o maqueta, open source."
            hrefViewDemo="https://free-only-webinar.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/free-only-webinar"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
          <CardProyects
            imageProyectSrc="/projects-cover/super-discount-cover.svg"
            alt="Super Discount"
            tagLanguajes="HTML, CSS"
            contentText_descript="Super Discount, es un template y/o maqueta, open source."
            hrefViewDemo="https://super-discount.abrahamcalsin.com"
            contentText_viewDemo="VER PROYECTO"
            hrefViewCode="https://github.com/abrahamcalsin/super-discount"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
        </div>
        <div className="w-full flex justify-center mb-12 md:mb-12">
          <a
            href="https://github.com/abrahamcalsin"
            className="text-size-2 group px-7 py-4 bg-clrOption-2 shadow-sm rounded-rds-1.1 font-extraBold hoverChild transition duration-300 hover:opacity-80 md:text-size-4 md:px-7 md:py-5"
            target="_blank"
          >
            VER MÁS EN MI GITHUB{" "}
            <span className="text-size-5 ml-2-6 md:group-hover:ml-3 md:text-size-8.1-desk">
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};
export default Projects;
