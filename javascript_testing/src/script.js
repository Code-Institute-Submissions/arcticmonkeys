$(document).ready(function(){

 $("#vocalist").click(function(){
        $(".collapse").collapse('.collapse');
    });

 $("#drum").click(function(){
        $(".collapse").collapse('.collapse');
    });

  $("#guitarist").click(function(){
        $(".collapse").collapse('.collapse');
    });

  $("#bass").click(function(){
        $(".collapse").collapse('.collapse');
    });

/*adding colour*/
 $('.card.alex').on("click",function() {

 		$(".card.matt").removeClass('makeYellow');
		$(".card.jamie").removeClass('makeYellow');
		$(".card.nick").removeClass('makeYellow');
 	 	$(".card.alex").addClass("makeYellow");
      });

 $('.card.matt').on("click",function() {

 		$(".card.alex").removeClass('makeYellow');
		$(".card.jamie").removeClass('makeYellow');
		$(".card.nick").removeClass('makeYellow');
       	        $(".card.matt").addClass("makeYellow");
      });

  $('.card.jamie').on("click",function() {

  		$(".card.alex").removeClass('makeYellow');
		$(".card.matt").removeClass('makeYellow');
		$(".card.nick").removeClass('makeYellow');
        	$(".card.jamie").addClass("makeYellow");
      });

 $('.card.nick').on("click",function() {

 		$(".card.alex").removeClass('makeYellow');
		$(".card.matt").removeClass('makeYellow');
		$(".card.jamie").removeClass('makeYellow');
        	$(".card.nick").addClass("makeYellow");
      });

/*Selecting members*/
  $(".card.alex").on("click", function(){
		$("#vocalist:not(.makeYellow)").hide();
		$("#drum:not(.makeYellow)").hide();
		$("#guitarist:not(.makeYellow)").hide();
		$("#bass:not(.makeYellow)").hide();
		$("#vocalist").toggle(".makeYellow");
      });

  $(".card.matt").on("click", function(){
		$("#drum:not(.makeYellow)").hide();
		$("#guitarist:not(.makeYellow)").hide();
		$("#bass:not(.makeYellow)").hide();
		$("#vocalist:not(.makeYellow)").hide();
		$("#drum").toggle(".makeYellow");
      });

  $(".card.jamie").on("click", function(){
		$("#guitarist:not(.makeYellow)").hide();
		$("#bass:not(.makeYellow)").hide();
		$("#vocalist:not(.makeYellow)").hide();
		$("#drum:not(.makeYellow)").hide();
		$("#guitarist").toggle(".makeYellow");
      });

  $(".card.nick").on("click", function(){
		$("#bass:not(.makeYellow)").hide();
		$("#vocalist:not(.makeYellow)").hide();
		$("#drum:not(.makeYellow)").hide();
		$("#guitarist:not(.makeYellow)").hide();
		$("#bass").toggle(".makeYellow");
      });


/*click out*/
$(document).click(function (e) {
    if (!$(e.target).hasClass("#vocalist")
        && $(e.target).parents(".card.alex").length === 0)
    {
        $("#vocalist").hide();
        $(".card.alex").removeClass("makeYellow");
    }
});

 $(document).click(function (e) {
    if (!$(e.target).hasClass("#drum")
        && $(e.target).parents(".card.matt").length === 0)
    {
        $("#drum").hide();
        $(".card.matt").removeClass("makeYellow");
    }
});

 $(document).click(function (e) {
    if (!$(e.target).hasClass("#guitarist")
        && $(e.target).parents(".card.jamie").length === 0)
    {
        $("#guitarist").hide();
        $(".card.jamie").removeClass("makeYellow");
    }
});

  $(document).click(function (e) {
    if (!$(e.target).hasClass("#bass")
        && $(e.target).parents(".card.nick").length === 0)
    {
        $("#bass").hide();
        $(".card.nick").removeClass("makeYellow");
    }
});

   /* scrolling effect*/
  $("#home").click(function() {
    console.log("Home");
    $('html, body').animate({
        scrollTop: $("#homeSection").offset().top
    }, 2000);
});

  $("#bandinha").click(function() {
    console.log("Band");
    $('html, body').animate({
        scrollTop: $("#bandSection").offset().top
    }, 2000);
});

$("#tourzinho").click(function() {
    console.log("Tour");
    $('html, body').animate({
        scrollTop: $("#tourSection").offset().top
    }, 2000);
});

$("#mediazinha").click(function() {
    console.log("Media");
    $('html, body').animate({
        scrollTop: $("#mediaSection").offset().top
    }, 2000);
});

$("#contatozinho").click(function() {
    console.log("Contact");
    $('html, body').animate({
        scrollTop: $("#contactSection").offset().top
    }, 2000);
});

});