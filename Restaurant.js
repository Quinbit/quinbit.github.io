$(document).ready(function(){

    // This allows for stars to be filled in when ones cursor moves over them
    $('.star').hover(function() {

        for (var number = $(this).data('number'); number > 0; number--) {

          if (!$('[data-number=' + number + ']').hasClass('clickedOn')) {
            $('[data-number=' + number + ']').toggleClass('glyphicon-star');
            $('[data-number=' + number + ']').toggleClass('glyphicon-star-empty');
          }
        }
    });
});
