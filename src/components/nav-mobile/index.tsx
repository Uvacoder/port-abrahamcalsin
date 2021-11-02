import { useRouter } from "next/router"
import Link from "next/dist/client/link"
import clsx from "clsx"

const NavTabIcon = (props: any) => {
  const { href, iconSrc, targetBlank, alt, contentLinkSection } = props

  const router = useRouter()

  const isActiveSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "flex justify-center items-center h-full w-6 border-t-4 transition border-primary duration-300 flex-col",
          !isActiveSelect &&
            "border-transparent opacity-50 hover:border-primary hover:opacity-100"
        )}
        target={targetBlank}
      >
        <img src={iconSrc} alt={alt} className="-mt-0.5 block" />
        <p className="text-xs-1.2 pt-px font-semiBold">{contentLinkSection}</p>
      </a>
    </Link>
  )
}

const NavMobile = () => {
  return (
    <div className="flex justify-evenly fixed bg-white shadow-sml w-full h-7.5 bottom-0 sm:hidden z-20">
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
  )
}

export default NavMobile
