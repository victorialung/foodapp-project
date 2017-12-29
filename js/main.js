$(document).ready(function() {
  // Establecemos nuestras funciones
  $('.pagination li').click(pagination); // OTRA forma de desarrollar una función
  $('.iconarrow-right span').click(nextSlider);
  $('.iconarrow-left span').click(prevSlider);

  // Funciones-------------------
  // Recordar que el método Index() devuelve la posición del elemento en valor de número
  function pagination() {
    var paginationPos = $(this).index() + 1;
    console.log(paginationPos);

    $('.slide-img').hide();
    $('.slide-img:nth-child(' + paginationPos + ')').fadeIn();

    $('.pagination li').css({ 'color': '#858585' });
    $(this).css({ 'color': '#cd6e2e' });

    imgPos = paginationPos;
  };
});