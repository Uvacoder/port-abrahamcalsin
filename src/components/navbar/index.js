import Link from "next/link"

import NavDesktop from "../nav-desktop"
import NavMobile from "../nav-mobile"

const Navbar = () => {
  return (
    <header className="sm:mt-3">
      {/* Navbar Logo Fixed Mobile */}
      <div className="fixed sm:static bg-white sm:bg-transparent shadow-sm sm:shadow-none  h-7.5 w-full flex justify-center items-center z-10">
        <div className="w-full max-w-70 flex justify-between items-center sm:justify-between px-2.5 sm:px-5.5">
          <Link href="/">
            <a className="w-11.2">
              <img
                src="/svg_image/logo-abraham-calsin.svg"
                alt="Abraham Calsin"
                className="w-full block"
              />
            </a>
          </Link>

          <a
            href="https://resume.abrahamcalsin.com"
            target="_blank"
            className="bg-secondary px-1.5 py-0.5 shadow-sm rounded-rds-1.1 font-extraBold sm:hidden"
          >
            Resume
          </a>

          <NavDesktop />
        </div>
      </div>

      <NavMobile />
    </header>
  )
}
export default Navbar
