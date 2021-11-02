import { useRouter } from "next/router"
import Link from "next/dist/client/link"
import clsx from "clsx"

const NavTabLink = (props: any) => {
  const { href, contentNavLink } = props

  const router = useRouter()

  const activeLinkSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "relative after:content-[' '] after:block after:h-0.5 after:bg-primary pb-0.5 after:w-full",
          !activeLinkSelect &&
            "after:w-0 after:right-0 after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
        )}
      >
        {contentNavLink}
      </a>
    </Link>
  )
}

const NavDesktop = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:gap-x-3 font-bold text-lg">
      <NavTabLink href="/" contentNavLink="Inicio" />
      <NavTabLink href="/about-me" contentNavLink="Sobre Mi" />
      <NavTabLink href="/projects" contentNavLink="Proyectos" />
      <a
        href="https://resume.abrahamcalsin.com"
        className="bg-secondary px-2 py-1 rounded-rds-1.1 shadow-sm transition duration-300 hover:opacity-80"
        target="_blank"
      >
        Resume
      </a>
    </div>
  )
}

export default NavDesktop
