'use strict'

// ============SLIDER #1==============={

let splide = new Splide('.splide1', {
  type: 'loop',
  direction: 'ttb',
  height: '70vh',
  wheel: true,
  arrows: false,
  autoplay: 'pause',
  interval: 2000,

}).mount();

let btnplay = document.querySelector('.splide__toggle')

splide.on('click', function () {
  btnplay.click()
});
// ===================================}

$(".btn_projects").click(function () {
  window.location.replace("http://stackoverflow.com");
});

// ===========SMOOTH ON CLICK========={
var smoothScroll = new scrollToSmooth('a', {
  targetAttribute: 'href',
  duration: 400,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
  easing: 'easeOutCubic',
  // onScrollStart: (data) => { console.log(data); },
  // onScrollUpdate: (data) => { console.log(data); },
  // onScrollEnd: (data) => { console.log(data); },
  fixedHeader: null
})
smoothScroll.init();

let test = document.querySelector('.arrow')
test.addEventListener('click', () => {
  smoothScroll1('.wwd', 1000);
})
// ========2 TYPES====================}


// =======HOVER 360 PICTURE==========={
  
  let img360 = document.querySelector('.pictures__img360');
  let overlay = document.querySelector('.overlay')
  
  img360.addEventListener("mouseover", function () {
    overlay.classList.add('no')
  });
  img360.addEventListener("mouseout", function () {
    overlay.classList.remove('no')
  });
  // ===================================}
  
  // ==============SLIDER 2============={
  
  let splide1 = new Splide('.splide2', {
    perPage: 3,
    rewind: true,
    width: '75%',
    perMove: 1,
  }).mount();
  
  console.log(splide1._o)
  
  if (window.matchMedia("(max-width: 850px)").matches) {
    splide1._o.perPage = 1;
    // splide1.mount()
  } 
  // ========CHECK FOR ADAPTIVE SCREEN==}
  
  // ========MAP========================{
    function initMap() {
      const myLatLng = { lat: 40.675725863020794, lng: -73.90270946304315 };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.675725863020794, lng: -73.90270946304315 },
        zoom: 12,
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ],
    mapTypeId: "roadmap",
  });

  //let image = '../img/Pin.png'

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Ocean view",

  });


}
// ===================================}

// ================ARROW TO TOP======={

$(document).scroll(function () {
  let y = $(this).scrollTop();
  (y > 600) ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
});

$('.toTop').click(() => {
  smoothScroll1('.header', 1000, 'easeInQuad');
})
// =======HIDE TILL HEIGHT FROM TOP IS LESS THAN 600}






/**  ++++++  NOT IMPEMENTED FEATURES +++++++++++++++++++++++++++++++++++++++++++
 * 1) smooth scrolling throught full site
 * 2) progress loading and some beauty features
 */


// =========SMOOTH SCROOLING========{

// const html = new Scrooth({
//   // strength: 10,
//   // acceleration: 1,
//   // deceleration: 0.9
// });

// =================================}



// ==========SLOW LOADING AND ELEMENT MOVING======{
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 400) {
//       $(".move1").fadeIn(2000)
//     }
//     if ($(window).scrollTop() > 500) {
//       $(".move2").fadeIn(2000);

//     }
//   });
// });
// ================================================}