let scrollEventData = {
  isTop: true,
  isBotton: false
}
document.addEventListener('scroll', (e) => {
  
  // Top
  if (window.scrollY <= 50) {
    scrollEventData.isTop = true;
  } else {
    scrollEventData.isTop = false;
  }

  // Botton
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    scrollEventData.isBotton = true;    
  } else {
    scrollEventData.isBotton = false;
  }

})

export default {
  scrollEventData
}
