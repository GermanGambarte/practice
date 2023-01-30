const container = document.querySelector('.container')
console.log(container.children)

container.addEventListener('click', ({target}) => {
  const isActive = target.classList.contains('active')
  if(target.classList.contains('container') || isActive) return
  if(target.classList.contains('panel-title')) {
    removeActiveClass()
    return target.parentElement.classList.add('active')
  }
  removeActiveClass()
  target.classList.add('active')
})

function removeActiveClass() {
  Array.from(container.children).forEach(child =>{
    child.classList.remove('active')
  })
}
