window.onload = () => {
  generateImgs();
  addClassesOfImages();
  addClickEventOnCards();
  reloadPage();
}

const arrayOfNumbers = [1, 1, 2, 2, 3, 3, 4, 4];

const generateImgs = () => {
  const sectionCards = document.querySelector('#cards');

  for (let index = 0; index < 8; index += 1) {
    const div = document.createElement('div');

    sectionCards.appendChild(div);
  }
}

const generateArrayOfImages = () => document.querySelectorAll('section img');

const generateShuffledArray = (array) => {
  let lenght = array.length;

  for (let index = 0; index < 8; index += 1) {
    let randomNumber = Math.floor(Math.random() * lenght--);

    // Aqui se faz as trocas aleatórias
    temporary = array[lenght];
    array[lenght] = array[randomNumber];
    array[randomNumber] = temporary;
  }

  return array;
}

const addClassesOfImages = () => {
  const cards = document.querySelectorAll('section div');
  const arrayWithShuffledNumbers = generateShuffledArray(arrayOfNumbers);

  for (let index = 0; index < cards.length; index += 1) {
    cards[index].className = `class${arrayWithShuffledNumbers[index]}`;
  }
}

let array = [];

const addClickEventOnCards = () => {
  const cards = document.querySelectorAll('section div');
  let clicks = 0;


  for (let index = 0; index < cards.length; index += 1) {
    cards[index].addEventListener('click', (event) => {
      event = event.target;

      changeForFrontClass(event);
      array.push(event.className);
      clicks += 1;

      if (clicks === 2) {
        if (array[array.length - 1] === array[array.length - 2]) {
          removeCards(array[array.length - 1]);
        } else {
          changeForBackClass();
        }
        clicks = 0;
      }
    })
  }
}

const changeForFrontClass = (event) => {
  if (event.className === 'class1') {
    event.className = 'class1Front';
  } else if (event.className === 'class2') {
    event.className = 'class2Front';
  } else if (event.className === 'class3') {
    event.className = 'class3Front';
  } else if (event.className === 'class4') {
    event.className = 'class4Front';
  }
}

const changeForBackClass = () => {
  let divs = document.querySelectorAll('section div');

  setTimeout(() => {
    for (let index = 0; index < divs.length; index += 1) {
      if (divs[index].className === 'class1Front') {
        divs[index].className = 'class1';
      } else if (divs[index].className === 'class2Front') {
        divs[index].className = 'class2';
      } else if (divs[index].className === 'class3Front') {
        divs[index].className = 'class3';
      } else if (divs[index].className === 'class4Front') {
        divs[index].className = 'class4';
      }
    }
  }, 1000)
}

const removeCards = (string) => {
  let sectionCards = document.querySelector('section');
  let divs = document.querySelectorAll('section div');

  setTimeout(() => {
    for (let index = 0; index < divs.length; index += 1) {
      if (divs[index].className === string) {
        sectionCards.removeChild(divs[index]);
      }
    }
  }, 1000)
}

const reloadPage = () => {
  const button = document.querySelector('button'); 

  button.addEventListener('click', () => {
    window.location.reload();
  });
}