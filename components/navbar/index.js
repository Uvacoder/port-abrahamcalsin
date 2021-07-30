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
          "relative transition duration-300 before:content-[' '] before:absolute before:bottom-0 before:left-0 before:h-2-6 before:w-o before:bg-clrOption-1 pb-2-8 before:transition before:duration-300 before:ease-in-out before:w-full",
          !activeLinkSelect && "hover:before:w-full before:w-0"
        )}
      >
        {contentNavLink}
      </a>
    </Link>
  );
};

const NavTabIcon = (props) => {
  const { href, iconSrc, contentLinkSection } = props;

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
      >
        <img src={iconSrc} alt="Inicio" className="-mt-2-6 block" />
        <p className="text-size-1 pt-1 font-semiBold">{contentLinkSection}</p>
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header>
      {/* Navbar Logo Fixed */}
      <div className="fixed sm:static bg-clrOptin-3 sm:bg-transparent shadow-sm sm:shadow-none  h-20 sm:h-30 w-full flex justify-center items-center">
        <div className="w-full max-w-70 flex justify-center items-center sm:justify-between px-15">
          <Link href="/">
            <a className="sm:w-30 w-28">
              <img
                src="/svg_image/logo-abraham-calsin.svg"
                alt="Abraham Calsin"
                className="w-full block"
              />
            </a>
          </Link>
          {/* Navbar Links/Icons Fixed Desktop*/}
          <div className="hidden sm:flex sm:items-center sm:gap-x-8 font-bold text-size-8-desk">
            <NavTabLink href="/" contentNavLink="Inicio" />
            <NavTabLink href="/about-me" contentNavLink="Sobre Mi" />
            <NavTabLink href="/projects" contentNavLink="Proyectos" />
          </div>
          {/* ----- */}
        </div>
      </div>
      {/* Navbar Icons/Links Fixed Mobile*/}
      <div className="flex fixed bg-clrOptin-3 shadow-sml w-full h-20 justify-evenly items-center bottom-0 sm:hidden z-20">
        <NavTabIcon
          href="/"
          iconSrc="/icons/home-icon.svg"
          contentLinkSection="Inicio"
        />
        <NavTabIcon
          href="/about-me"
          iconSrc="/icons/aboutme-icon.svg"
          contentLinkSection="Sobre mi"
        />
        <NavTabIcon
          href="/projects"
          iconSrc="/icons/projects-icon.svg"
          contentLinkSection="Proyectos"
        />
      </div>
      {/* ----- */}
    </header>
  );
};
export default Navbar;
