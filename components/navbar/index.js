// import React, { useRef } from "react";
import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavTabLink = (props) => {
  const { href, contentNavLink } = props;

  const router = useRouter();

  const activeLinkSelect = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          "relative after:content-[' '] after:block after:h-2-8 after:bg-clrOption-1 pb-2-8 after:w-full",
          !activeLinkSelect &&
            "after:w-0 after:right-0 after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
        )}
      >
        {contentNavLink}
      </a>
    </Link>
  );
};

const NavTabIcon = (props) => {
  const { href, iconSrc, targetBlank, alt, contentLinkSection } = props;

  const router = useRouter();

  const isActiveSelect = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={clsx(
          "flex justify-center items-center h-full w-16 border-t-4 transition duration-300 flex-col",
          !isActiveSelect &&
            "border-brdSecondary opacity-50 hover:border-brdPrimary border-brdsecondary hover:opacity-100"
        )}
        target={targetBlank}
      >
        <img src={iconSrc} alt={alt} className="-mt-2-6 block" />
        <p className="text-size-1 pt-1 font-semiBold">{contentLinkSection}</p>
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="sm:mt-4">
      {/* Navbar Logo Fixed Mobile */}
      <div className="fixed sm:static bg-clrOptin-3 sm:bg-transparent shadow-sm sm:shadow-none  h-20 sm:h-30 w-full flex justify-center items-center z-10">
        <div className="w-full max-w-70 flex justify-between items-center sm:justify-between px-7 sm:px-15">
          <Link href="/">
            <a className="sm:w-30 w-28">
              <img
                src="/svg_image/logo-abraham-calsin.svg"
                alt="Abraham Calsin"
                className="w-full block"
              />
            </a>
          </Link>
          <a
            href="https://resume.abrahamcalsin.com"
            target="__blank"
            className="bg-clrOption-2 px-4 py-1-3 shadow-sm rounded-rds-1.1 font-extraBold sm:hidden"
          >
            Resume
          </a>
          {/* Navbar Links Desktop*/}
          <div className="hidden sm:flex sm:items-center sm:gap-x-8 font-bold text-size-8-desk">
            <NavTabLink href="/" contentNavLink="Inicio" />
            <NavTabLink href="/about-me" contentNavLink="Sobre Mi" />
            <NavTabLink href="/projects" contentNavLink="Proyectos" />
            <a
              href="https://resume.abrahamcalsin.com"
              className="bg-clrOption-2 px-6 py-3 rounded-rds-1.1 shadow-sm transition duration-300 hover:opacity-80"
              target="__blank"
            >
              Resume
            </a>
          </div>
          {/* ----- */}
        </div>
      </div>
      {/* Navbar Icons/Links Fixed Mobile*/}
      <div className="flex fixed bg-clrOptin-3 shadow-sml w-full h-20 justify-evenly items-center bottom-0 sm:hidden z-20">
        <NavTabIcon href="/" iconSrc="/icons/home-icon.svg" contentLinkSection="Inicio" />
        <NavTabIcon
          href="/about-me"
          iconSrc="/icons/aboutme-icon.svg"
          alt="Sobre mi"
          contentLinkSection="Sobre mi"
        />
        <NavTabIcon
          href="/projects"
          iconSrc="/icons/projects-icon.svg"
          alt="Proyectos"
          contentLinkSection="Proyectos"
        />
      </div>
      {/* ----- */}
    </header>
  );
};
export default Navbar;
