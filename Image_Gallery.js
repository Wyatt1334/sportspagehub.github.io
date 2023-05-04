// Gallery JSON data
const galleryData = [
    {src: 'lfc.png', alt: 'Liverpool Vs Leeds'},
    {src: 'arsenal.png', alt: 'Arsenal Vs West Ham'},
    {src: 'city.png', alt: 'Man City Vs Leicester'},
    {src: 'palace.png', alt: 'Crystal Palace Vs Southampton'},
    {src: 'spurs.png', alt: 'Tottenham Vs Bournemouth'},
    {src: 'united.png', alt: 'Man United Vs Nottingham Forest'},
    {src: 'villa.png', alt: 'Aston Villa Vs Newcastle'},
    {src: 'brighton.png', alt: 'Brighton Vs Chelsea'},
    {src: 'fulham.png', alt: 'Fulham Vs Everton'},
  ];
  
  // Generate image gallery
  const galleryContainer = document.querySelector('.gallery');
  
  galleryData.forEach(data => {
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    galleryContainer.appendChild(img);
  });
  
  