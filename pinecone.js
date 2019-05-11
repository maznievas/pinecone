// $('.multiple-slide').slick({
//   infinite: true,
//   slidesToShow: 3,
//   //количество слайдов, которые выводятся на экране
//   slidesToScroll: 1
//   //количество слайдов, которые перелистываются за один раз
// });

// $('.uncycle').slick({
//   infinite: false,
//   speed: 350,
// // определяем скорость перелистывания
//   slidesToShow: 4,
// //количество слайдов для показа
//   slidesToScroll: 2,
// //сколько слайдов за раз перелистнется
// responsive: [
//     {
//       breakpoint: 600,
// //сообщает, при какой ширине экрана нужно включать настройки
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     }
// ]
// });

// Bugs
// clicking on carousel stops autoshowing
// centering block content for mobile deice
// resizing of carousele image on mobile devices


//  $(document).ready(function(){
// 	$('.carousel').carousel({
// 	  interval: 3000,
// 	  keyboard: false,
// 	  wrap: false
// 	})
// });

 $('.carousel .item').each(function() {
var next = $(this).next();
if (!next.length) {
next = $(this).siblings(':first');
}
next.children(':first-child').clone().appendTo($(this));
for (var i = 0; i < 2; i++) {
next = next.next();
if (!next.length) {
next = $(this).siblings(':first');
}
next.children(':first-child').clone().appendTo($(this));
}
});




 $(document).ready(function(){
        $('.thing').slick({
          arrows: false,
          autoplay: true,
          infinite: true,
          loop:true,
            speed: 400,
            fade: true,
            cssEase: 'linear',
          responsive: [
            {
              // critical value for settings
              breakpoint: 600,
              settings: {
              infinite: true,
            }
    }
]
        });
      });

