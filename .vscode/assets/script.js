function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver em light mode adcionar a imagem light
    //html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt","Foto de Cristiane Martins sorrindo, usando uma blusa branca por baixo de uma camisa azul florida")
  } 
  
  
  else {
    // se estiver em dark mode adcionar a imagem normal
    //html.classList.add("light")
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Cristiane Martins sorrindo, usando uma camisa de gola branca e fundo com uma parede beje com grades na janela")
  }
}
