$(document).ready(() => {

  function skillsQuery(x) {
    if(x.matches) {
      // Skill Section Animations when screen width <= 690px: look into how to refactor to reduce repetition
      $('#html').hover(function () {
        $('#html-details').slideToggle();
        });

      $('#sass').hover(function () {
        $('#sass-details').slideToggle();
        });

      $('#responsive').hover(function () {
        $('#rd-details').slideToggle();
        });

      $('#git').hover(function () {
        $('#git-details').slideToggle();
        });

      $('#js').hover(function () {
        $('#js-details').slideToggle();
        });

      $('#jquery').hover(function () {
        $('#jquery-details').slideToggle();
        });

    } else {

      // Skill Section Animations when screen width > 690px: look into how to refactor to reduce repetition
      $('#html').hover(function () {
        $('#html-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#html-details').toggleClass('skills__skillsDetails--visible');
        });

      $('#sass').hover(function () {
        $('#sass-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#sass-details').toggleClass('skills__skillsDetails--visible');
        });

      $('#responsive').hover(function () {
        $('#rd-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#rd-details').toggleClass('skills__skillsDetails--visible');
        });

      $('#git').hover(function () {
        $('#git-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#git-details').toggleClass('skills__skillsDetails--visible');
        });

      $('#js').hover(function () {
        $('#js-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#js-details').toggleClass('skills__skillsDetails--visible');
        });

      $('#jquery').hover(function () {
        $('#jquery-details').toggleClass('skills__skillsDetails--visible').css("left", "100%").animate({left: "0"}, 400);
      }, function() {
        $('#jquery-details').toggleClass('skills__skillsDetails--visible');
        });
    }
  }
  var x = window.matchMedia('(max-width: 690px)');
  skillsQuery(x);
  x.addListener(skillsQuery);
});
