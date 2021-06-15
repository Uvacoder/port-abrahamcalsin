const toggleDarkmode = document.querySelector('#toggleDarkmode')

const iconElement = toggleDarkmode.querySelector('i')

const logoModifiedDarkMode = document.getElementById('logoModeLightDark')

const cleanTheme = () => {
  //   Clean the icon classess
  iconElement.classList.remove('fa-sun')

  iconElement.classList.remove('fa-moon')
}

const applyTheme = isDark => {
  if (isDark) {
    document.body.classList.add('darkMode')

    localStorage.setItem('dark-mode', 'true')

    toggleDarkmode.classList.add('active')

    iconElement.classList.add('fa-sun')

    logoModifiedDarkMode.setAttribute(
      'src',
      'https://abrahamcalsin.com/resources/logo-abraham-calsin/logo-abraham-calsin-white.svg',
    )
  } else {
    document.body.classList.remove('darkMode')

    localStorage.setItem('dark-mode', 'false')

    toggleDarkmode.classList.remove('active')

    iconElement.classList.add('fa-moon')

    logoModifiedDarkMode.setAttribute(
      'src',
      'https://abrahamcalsin.com/resources/logo-abraham-calsin/logo-abraham-calsin-black.svg',
    )
  }
}

toggleDarkmode.addEventListener('click', () => {
  const isDark = document.body.classList.contains('darkMode')

  cleanTheme()

  applyTheme(!isDark)
})

// call initializy

const isDark = localStorage.getItem('dark-mode') === 'true'

cleanTheme()

applyTheme(isDark)
