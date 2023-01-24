$(document).ready(function(){

 $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    onCycleTo: onCycled
  });
  autoplay()
  ifLast()
  
})

function onCycled(slide){
  console.log($(slide).attr('href'));
  if($(slide).attr('href') === '#5!'){
    $('.new4').click();
  }
}

function autoplay(){
 $('.carousel.carousel-slider').carousel('next');
  setTimeout(autoplay,10000);
}

function ifLast(){ // checks if last 
  if ($('.carousel.carousel-slider').next().not('.carousel-item')) {
    console.log("last page");
    // $('.new3').click()
  }
}

