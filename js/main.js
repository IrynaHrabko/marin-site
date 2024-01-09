function initSlider(sliderSelector) {
  let slides = document.querySelector(sliderSelector).children
  let sliderLength = slides.length


  addSlidesClasses(slides)
  createButtons(sliderSelector)
}

function addSlidesClasses(slides) {
  Array.from(slides).forEach((slide) => {
    
    slide.classList.add('slider-slide')
  });
  slides[0].classList.add('active')
}

function createButtons(slider) {
  let prev = document.createElement('a')
  let next = document.createElement('a')
  prev.classList.add('prev-button')
  next.classList.add('next-button')



  prev.innerHTML = '&#10094'
  next.innerHTML = '&#10095'

  prev.style.cursor = 'pointer'
  prev.style.position = 'absolute';
  prev.style.top = '45%';
  prev.style.width = 'auto';
  prev.style.left = '18%';
  prev.style.color = '#ADDDDE';
  prev.style.fontWeight = '300';
  prev.style.fontSize = '40px';
  prev.style.transition = '0.6s ease';
  

  next.style.cursor = 'pointer'
  next.style.position = 'absolute';
  next.style.top = '45%';
  next.style.width = 'auto';
  next.style.color = '#ADDDDE';
  next.style.fontWeight = '300';
  next.style.fontSize = '40px';
  next.style.transition = '0.6s ease';
  next.style.right = '18%';
 
  

  document.querySelector(slider).appendChild(prev)
  document.querySelector(slider).appendChild(next)
}

initSlider('.reviews__container')
