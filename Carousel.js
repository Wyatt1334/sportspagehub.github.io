// Carousel JSON data
const carouselData = [
    {src: 'lfc.png', alt: 'Liverpool Vs Leeds'},
    {src: 'arsenal.png', alt: 'Arsenal Vs West Ham'},
    {src: 'city.png', alt: 'Man City Vs Leicester'},
    {src: 'spurs.png', alt: 'Tottenham Vs Bournemouth'},
    {src: 'villa.png', alt: 'Aston Villa Vs Newcastle'},
  ];
  
  // Generate interactive carousel
  const carouselContainer = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  
  carouselData.forEach((data, index) => {
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    if (index === currentIndex) {
      img.classList.add('active');
    }
    carouselContainer.appendChild(img);
  });
  
  prevButton.addEventListener('click', () => {
    const currentImg = carouselContainer.querySelector('.active');
    const prevImg = currentImg.previousSibling || carouselContainer.lastElementChild;
    currentImg.classList.remove('active');
    prevImg.classList.add('active');
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselData.length - 1;
    }
  });
  
  nextButton.addEventListener('click', () => {
    const currentImg = carouselContainer.querySelector('.active');
    const nextImg = currentImg.nextSibling || carouselContainer.firstElementChild;
    currentImg.classList.remove('active');
    nextImg.classList.add('active');
    currentIndex++;
    if (currentIndex >= carouselData.length) {
      currentIndex = 0;
    }
  });