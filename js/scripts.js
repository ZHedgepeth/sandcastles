$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#sandcastle1").slideToggle();
  });

  $(".clickable2").click(function() {
    $("#sandcastle2").slideToggle();
  });

  $(".clickable3").click(function() {
    $("#sandcastle3").slideToggle();
  });

  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light");
  });

  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark");
  });

  $("button#home").click(function(){
    $("body").removeClass();
    $("body").addClass("home");
  })

  // $("p1#highlight1").click(function(){
  //   $("p").removeClass();
  //   $("p").addClass("highlight1");
  //   $("p").fadeToggle();
  // })

  $(".p1").click(function(){
    // $(".p1").addClass("selected");
    $(".p1").toggleClass("selected");

  });

});
