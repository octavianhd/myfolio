//show/hide div from work section
$(document).ready(function() {
  $('.showDiv').mouseenter(function(){
    $(this).children('.show').children('span').fadeIn(200);
  }).mouseleave(function(){
    $(this).children('.show').children('span').fadeOut(200);
  });
});

//show/hide nav menu on small devices
$(document).ready(function(){
	$("#nav-button").click(function(){
		$("#myNavi").toggle();
	});
});

// $(document).ready(function(){
//   $(".showDiv").mouseenter(function(){
//     $(this).children(".show").children(".hidingDiv").css("visibility","visible");
//   }).mouseleave(function(){
//     $(this).children(".show").children(".hidingDiv").css("visibility","hidden");
//   });
// });

//Pager

// var app = angular.module('myApp',[]);
// app.directive('pagerIn', function(){
//   return {
//     restrict: 'E',
//     templateUrl: 'template/template.html #pagerDiv'
//   }
// });

// app.controller('workCtrl', function(){
//   var myVar = false;
//   var element = document.getElementsByClassName("showDiv");
//   element.hover(function(){
//     myVar = true;
//     return myVar;
//   });
// });





