import React from 'react'
import useDarkTheme from '~/hook/use-dark-theme'
import useFullLoad from '~/hook/use-full-load'

const DarkThemeButton = () => {
  const { onToggle } = useDarkTheme()
  const { fullLoad } = useFullLoad()

  const style: React.CSSProperties = {
    position: 'absolute',
    transformOrigin: 'bottom',
    transition: 'transform 500ms, opacity 300ms',
  }

  return (
    <div
      onClick={onToggle}
      className="relative w-3.7 h-3.7 p-0.7 dark:bg-secondary/10 border-px border-primary dark:border-secondary cursor-pointer text-primary dark:text-secondary rounded overflow-hidden select-none"
    >
      <div
        className={`-rotate-0 translate-y-0 opacity-100 dark:-rotate-90 dark:translate-y-1.7 dark:opacity-40 ${
          fullLoad ? '-rotate-0 translate-y-0' : 'scale-0 -rotate-90 translate-y-1.7'
        }`}
        style={style}
      >
        <svg
          className="w-2 h-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>

      <div
        className={`-rotate-90 translate-y-1.7 opacity-40 dark:-rotate-0 dark:translate-y-0 dark:opacity-100 ${
          fullLoad ? '-rotate-0 translate-y-0' : '!scale-0 !-rotate-90 !translate-y-1.7'
        }`}
        style={style}
      >
        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
  )
}
export default DarkThemeButton
