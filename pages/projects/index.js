import clsx from "clsx";
import MainLayout from "../../components/layout";
import Head from "next/head";

const CardProyects = (props) => {
  const {
    hrefViewDemo,
    hrefViewCode,
    imageProyectSrc,
    iconExternalSrc,
    alt,
    contentText_descript,
    contentText_viewDemo,
    contentText_viewCode,
  } = props;

  return (
    <div className={clsx("bg-clrOptin-3 p-4 shadow-sm rounded-rds-3-desk")}>
      <img
        src={imageProyectSrc}
        alt={alt}
        className={clsx("rounded-rds-4-desk")}
      />
      <div className={clsx("pt-6 px-3")}>
        <p className={clsx("text-justify text-size-4 sm:text-size-5")}>
          {contentText_descript}
        </p>
        <div
          className={clsx(
            "flex flex-col gap-3 justify-around items-center text-center my-4 sm:gap-4"
          )}
        >
          <a
            href={hrefViewDemo}
            target="_blank"
            className={clsx(
              "flex items-center justify-center bg-clrOption-2 py-4 px-2 rounded-rds-1 text-size-2 font-extraBold hover:opacity-80 w-full sm:text-size-4"
            )}
          >
            {contentText_viewDemo}
            <img src={iconExternalSrc} className={clsx("w-4 ml-3")} />
          </a>
          {contentText_viewCode ? (
            <a
              href={hrefViewCode}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                "bg-clrOption-2 py-4 px-7 rounded-rds-1 text-size-2 font-extraBold hover:opacity-80 w-full sm:text-size-4"
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
        <div className="my-15 grid grid-cols-autoGrid gap-15  items-start sm:my-25 sm:gap-13">
          <CardProyects
            imageProyectSrc="/projects-img/motivation_design_template.svg"
            alt="Shadow"
            contentText_descript="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
            hrefViewDemo="https://motivation-image.abrahamcalsin.com/"
            contentText_viewDemo="VER PROYECTO"
            iconExternalSrc="/icons/external_link.svg"
          />
          <CardProyects
            imageProyectSrc="/projects-img/shadow_design_template.svg"
            alt="Shadow"
            contentText_descript="Shadow es una biblioteca de código abierto, que permite a un
            diseñador elegir sombras modernas."
            hrefViewDemo="https://shadow.abrahamcalsin.com/"
            contentText_viewDemo="VER PROYECTO"
            iconExternalSrc="/icons/external_link.svg"
            hrefViewCode="https://github.com/abrahamcalsin/shadow"
            contentText_viewCode="VER CÓDIGO EN GITHUB"
          />
        </div>
      </div>
    </MainLayout>
  );
};
export default Projects;
