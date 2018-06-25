$(document).ready(function(){
  $('div').attr("id", "1");
  $("<div/>").attr('id','2').appendTo('body');
  $('#2').append("WORLD");

  $("#1").css("color", "blue");
  $("#1").css("text-align", "right");
  $("#2").css("color", "red");
  $("#2").css("text-align", "left");


});
