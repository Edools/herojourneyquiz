const buttonPopover = document.querySelector('.btn-help')
const popover = document.querySelector('.popover')

buttonPopover.addEventListener('click', (e) => {
  if(popover.classList.contains('hidden')) {
    popover.classList.remove('hidden')
  } else {
    popover.classList.add('hidden')
  }
})