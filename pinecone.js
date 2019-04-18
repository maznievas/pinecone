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


        $('.thing').slick({
          // dots: true,
          arrows: false,
          autoplay: true,
          infinite: true,
          loop:true,
          // autoplaySpeed: 2000,
            //fade
            // infinite: true,
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
