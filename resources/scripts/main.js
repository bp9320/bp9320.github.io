$(document).ready(() => {

  // Skill Section Animations: look into how to refactor to reduce repitition
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
});
