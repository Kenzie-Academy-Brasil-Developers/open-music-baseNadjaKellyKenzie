/* Desenvolva sua lógica aqui ... */
const render = (array) => {
    const darkButton = document.querySelector('.dark__mode');

    const html = document.querySelector('html');

    const img = document.createElement('img')
    img.src = './src/assets/img/moon.svg'
    const imgSun = document.createElement('img')
    imgSun.src = './src/assets/img/sun.svg'
    darkButton.appendChild(img)
    
    darkButton.addEventListener('click', () => {
      html.classList.toggle('light-mode')
      if (html.classList.contains('light-mode')) {
        img.setAttribute('src', './src/assets/img/sun.svg')
      } else {
        img.setAttribute('src', './src/assets/img/moon.svg')
      }
    })
  }
  render()