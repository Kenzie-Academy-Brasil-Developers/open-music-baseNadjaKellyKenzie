/* Desenvolva sua lógica aqui ... */
const render = (array) => {
  const darkButton = document.querySelector('.dark__mode');

  const html = document.querySelector('html');

  const img = document.createElement('img');
  img.src = './src/assets/img/moon.svg';
  const imgSun = document.createElement('img');
  imgSun.src = './src/assets/img/sun.svg';
  darkButton.appendChild(img);

  const modePreference = JSON.parse(localStorage.getItem('light-mode'));
  if (modePreference === false) {
    img.setAttribute('src', './src/assets/img/sun.svg');
    html.classList.add('light-mode');
  } else {
    img.setAttribute('src', './src/assets/img/moon.svg');
    html.classList.remove('light-mode');
  }

  darkButton.addEventListener('click', () => {
    html.classList.toggle('light-mode');
    if (html.classList.contains('light-mode')) {
      img.setAttribute('src', './src/assets/img/sun.svg');
      localStorage.setItem('light-mode', false);
    } else {
      img.setAttribute('src', './src/assets/img/moon.svg');
      localStorage.setItem('light-mode', true);
    }
  });
};

render();

  