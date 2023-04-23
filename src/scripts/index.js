/* Desenvolva sua lógica aqui ... */

const render__ul = (array) => {

    const ul = document.querySelector('.render')
    ul.innerHTML = ''

    array.forEach(element => {

    const li = document.createElement('li')

    const img = document.createElement('img')
    img.src = element.img;

    const divInfo = document.createElement('div')
    divInfo.classList.add('info');

    const divEra = document.createElement('div')
    divEra.classList.add('era');

    const band = document.createElement('p')
    band.innerText = element.band;

    const year = document.createElement('p')
    year.innerText = element.year;

    const title = document.createElement('h3')
    title.innerText = element.title;

    const buttonPurchase = document.createElement('div')
    buttonPurchase.classList.add('button__purchase')

    const price = document.createElement('p')
    price.innerText = `R$ ${element.price},00`

    const button = document.createElement('button')
    button.innerText = 'Comprar'

    buttonPurchase.append(price,button)
    divEra.append(band,year)
    divInfo.append(divEra,title,buttonPurchase,)
    li.append(img,divInfo)
    ul.appendChild(li)
    });
}
render__ul(products)


const filter__ul = (array) => {
  const buttons = document.querySelectorAll('#buttons__filter-music')
  let filterButtons = []

  buttons.forEach((elementButton) => {
    elementButton.addEventListener('click', (event) => {
      const searchCategory = categories.indexOf(event.target.innerText.trim())
      if (searchCategory === 0) {
        filterButtons = products
      } else {
        filterButtons = array.filter((fil) => {
          return fil.category == searchCategory
        })
      }
      render__ul(filterButtons)
      
    })
  })
}

 filter__ul(products) 

 const filter__value = (array) => {
  const inputRage = document.querySelector('#inputRage')
  const inputSpan = document.querySelector('.spanRage')
  inputRage.value = 100
  inputRage.addEventListener('input', () => {
    const values = parseFloat(inputRage.value).toFixed(2)
    inputSpan.textContent = `Até R$ ${values}`
    const inputFilter = array.filter(filter => filter.price <= values)
    render__ul(inputFilter)
    })
  }

 filter__value(products)
 