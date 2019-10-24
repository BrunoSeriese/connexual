var x = 0;
var y = 0;

$(".message--1").click(function(){

  if( x === 1 ){
       $(".message__text--1").text("Привет как дела?");
       x--;
    }

    else {
      $(".message__text--1").text("Hey, how are you?");
      console.log(x);
        x++;
      }

});



$(".message--2").click(function(){

  if( y === 1 ){
       $(".message__text--2").text("¿ Bien y tu?");
       y--;
    }

    else {
      $(".message__text--2").text("Good, and you?");

        y++;
      }

});


$(".container__overlay--1").hover(function(){

$(".message--2").toggleClass("lowpacity");

});

$(".container__overlay--2").hover(function(){

$(".message--1").toggleClass("lowpacity");

});


$(".paid").click(function(){
  console.log($("#paid").css("background-color"));
  if($("#free").css("background-color") =="rgb(76, 58, 56)")
  {
    $(".pricing__right").toggleClass("active__item");
      $(".pricing__left").toggleClass("active__item");
  }

});


$(".free").click(function(){
    console.log($("#free").css("background-color"));
    if($("#paid").css("background-color") =="rgb(76, 58, 56)"){
  $(".pricing__left").toggleClass("active__item");
    $(".pricing__right").toggleClass("active__item");
  }
});



$(".free").click(function(){
  console.log($("#first").css("opacity"));
if($("#first").css("opacity") == 0){
  console.log("succes!");
  $(".pricing__feature--1").toggleClass("lowpacity--2");
  $(".pricing__feature--2").toggleClass("lowpacity--2");
}


});

$(".paid").click(function(){
  console.log($("#second").css("opacity"));
if($("#second").css("opacity") == 0){
  console.log("succes!");
  $("#first").toggleClass("lowpacity--2");
  $("#second").toggleClass("lowpacity--2");
}


});
