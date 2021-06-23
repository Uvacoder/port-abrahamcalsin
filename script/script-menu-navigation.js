// Amburguer Bar
var headerNavigation = document.getElementById('menuNavigation')

headerNavigation.addEventListener('click', e => {
  if (e.target.tagName == 'DIV') {
    headerNavigation.classList.toggle('activeMenu')
  }
})

// // Color Select Link
// const colorSelectLink = document.getElementById('colorSelectLink')

// colorSelectLink.style.color = '#f96802'
