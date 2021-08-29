import clsx from "clsx";
import Link from "next/link";
import MainLayout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

const SocialMediaStyles = (props) => {
  const { href, logoSrc, alt } = props;

  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "bg-clrOption-2 w-32 rounded-rds-1.1 shadow-sm inline-block py-4 px-6 transition duration-300 hover:opacity-80 sm:w-35"
        )}
      >
        <img src={logoSrc} alt={alt} className="w-full block" />
      </a>
    </Link>
  );
};

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>Abraham Calsin</title>
      </Head>
      <div className="max-w-70">
        <div className="text-center sm:flex flex-row-reverse sm:text-left sm:pt-20">
          <div className="w-36-dek max-w-full mx-auto pb-8 sm:w-285">
            <Image
              src="/images/abraham-calsin-picture.png"
              alt="Abraham Calsin"
              className="w-full"
              width={512}
              height={512}
            />
          </div>
          <div className="sm:w-710">
            <h3 className="text-size-1 font-medium tracking-ltr-1 sm:text-size-7.1-desk">
              BIENVENIDO A MI PORTAFOLIO
            </h3>
            <div className="bg-clrOption-1 w-35 h-1-2 mx-auto my-2 sm:m-0 sm:my-3 sm:h-2-6 sm:w-36.1-desk"></div>
            <h1 className="font-extraBold text-size-6 sm:text-size-8.2-desk">
              {"{"}Abraham Calsin{"}"}
            </h1>
            <p className="text-size-5 font-medium px-10 mt-2 sm:px-0 sm:text-size-8.1-desk">
              Hey, hola! Soy un Maquetador Web, apasionado por el diseño y la programación web, creo
              proyectos de código abierto.
            </p>
            <div className="flex justify-center sm:justify-start gap-5 mt-6 sm:mt-10">
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
        <div className="my-20 px-4 sm:my-36.2-desk">
          <div className="w-full max-w-500 mx-auto bg-clrOptin-3 shadow-sm px-9 py-7 rounded-rds-1 relative italic text-size-4 sm:text-size-7.2-desk sm:py-12 sm:px-12 sm:rounded-rds-2-desk">
            <strong className="absolute -mt-21 -ml-14 text-size-6.1 font-notoSerif font-black not-italic sm:-mt-32 sm:-ml-20 sm:text-size-9-desk">
              “
            </strong>
            <p className="font-regular mt-2">
              Todo lo que hagas con esfuerzo y sacrificio, lo obtendras con beneficios; ¡No te
              rindas!.
            </p>
            <p className="font-bold mt-2">— Abraham Calsin</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Home;
