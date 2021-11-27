$(document).ready(function(){
    $("p").on("click", function(){
      $(this).hide();
    });
  });
  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "grey");
    });
  });
