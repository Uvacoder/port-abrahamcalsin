import clsx from 'clsx'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'

import { DarkThemeButton } from '~/components/dark-theme-button'
import { LogoAbrahamCalsin } from '~/components/svgs'

interface NavigationLinkProps {
  href: string
  textLink: string
}

function NavigationLink(props: NavigationLinkProps) {
  const { href, textLink } = props

  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <a className={clsx('hover:text-secondary', isActive && 'pointer-events-none text-secondary')}>{textLink}</a>
    </Link>
  )
}

export default function NavbarDesktop() {
  return (
    <div className="container items-center justify-between hidden sm:flex">
      <Link href="/">
        <a className="w-11.2 text-primary-800 dark:text-primary-200">
          <LogoAbrahamCalsin className="w-full" />
        </a>
      </Link>

      <div className="flex items-center text-lg font-bold gap-x-3">
        <NavigationLink href="/" textLink="Inicio" />
        <NavigationLink href="/about-me" textLink="Sobre Mi" />
        <NavigationLink href="/projects" textLink="Proyectos" />
        <NavigationLink href="/blog" textLink="Blog" />
        <DarkThemeButton />
      </div>
    </div>
  )
}
