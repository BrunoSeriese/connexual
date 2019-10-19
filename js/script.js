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
