const buttonPopover = document.querySelector('.btn-exit')
const popover = document.querySelector('.popover-level')

buttonPopover.addEventListener('click', (e) => {
  if(popover.classList.contains('hidden')) {
    popover.classList.remove('hidden')
  } else {
    popover.classList.add('hidden')
  }
})