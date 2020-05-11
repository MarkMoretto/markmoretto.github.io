// document.addEventListener("DOMContentLoaded", function(event) {

// });


// Foot date helper
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("footer-year").innerHTML = new Date().getFullYear();
});


/*
Color picker. Goes with _dropdown.scss
*/
// var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

// colors.each(function (color) {
//   $$('.color-picker')[0].insert(
//     '<div class="color-square" style="background: #' + color + '"></div>'
//   );
// });

// $$('.color-picker')[0].on('click', '.square', function(event, square) {
//   background = square.getStyle('background');
//   $$('.custom-dropdown select').each(function (dropdown) {
//     dropdown.setStyle({'background' : background});
//   });
// });

