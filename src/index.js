import $ from 'jquery';

// var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
// $( document ).ready(function() {
//   $( document ).bind(mousewheelevt, function(e){
//       var evt = window.event || e //equalize event object     
//       evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
//       var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

//       if(delta > 0) {
//         console.log('up');
//       }
//       else{
//         console.log('down'); 
//         $('html, body').animate({
//             scrollTop: $(".content").offset().top
//           }, 
//           2000
//         );
//       }   
//   });
// });
