const switchButton = document.querySelector(".switch button")
const htmlElement = document.documentElement

function toggleTheme() {

  // Maneira tradicional
  // if (htmlElement.classList.contains("light")) {
  //   htmlElement.classList.remove("light")
  // } else {
  //   htmlElement.classList.add("light")
  // }

  //Maneira mais moderna
  htmlElement.classList.toggle("light")
}

function openNewTab(url){
  window.open(url, '_blank')
}
