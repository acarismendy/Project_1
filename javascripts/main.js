$(document).ready(function() {
   $('td').mouseenter(function() {
       $(this).mouseenter(function() {
         $(this).effect("highlight");
       });
   });
});
