$(document).ready(() => {
  $('.skills__skillsDetails').hide();
  var x = window.matchMedia('(max-width: 690px)');

      $('.skills__skill').hover(function() {

        var id = $(this).attr('id');
        if (x.matches) {
          //Animation for mouseEnter when screen <= 690px;
          $('.skills__skillsDetails').hide();
          $('#' + id + '-details').slideDown();
        } else {
          // Animation for mouseEnter when screen > 690px;
          $('.skills__skillsDetails').hide();
          $('#' + id + '-details').show().css("left", "100%").animate({left: "0"}, 400);
        }
      }, function() {
        var id = $(this).attr('id');
        if(x.matches) {
          //Animation for mouseLeave when screen <= 690px;
          $('#' + id + '-details').slideUp();
        } else {
          // Animation for mouseLeave when screen > 690px;
          $('#' + id + '-details').hide();
        }
      });

});

// Huge shout out to @blunket in the devICT slack workspace for the help on debugging the skillsDetails animations
