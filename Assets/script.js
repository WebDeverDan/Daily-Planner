// Date will pull in automatically
var now = moment().format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
console.log(now);



// local storage of inputted text. make local storage last for 24 hours if possibleto correspond with daily planner aspect

var typedMessage9 = $("#9");

$(document).ready(function(){

$(".saveBtn").on("click",function (){
  var divID = $(this).attr("data-id")


  var typedMessage9Array = JSON.parse(localStorage.getItem(typedMessage9)) || []

  console.log( $(typedMessage9 + divID).text())

  var displayString = typedMessage9.text;

  typedMessage9Array.push(displayString)
  localStorage.setItem(typedMessage9, JSON.stringify(typedMessage9Array))
  console.log(localStorage);
  
  for (let index = 0; index < typedMessage9Array.length; index++) {
    const displayString = typedMessage9Array[index];
    
  }



 })

});

// end of local storage







// this function takes the current hour from the date function and parses he information to look for a numerical value in the colorcode div
// based on the time parameters of the parsed information, it will determine the timeframe for each color change 
var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 8){
      $(this).css('background-color', '#77dd77');
    }else if(val < currentHour && val > currentHour-15){
      $(this).css('background-color', '#d3d3d3');
    }else if(val === currentHour){
      $(this).css('background-color','#ff6961');
    }else{
      $(this).css('background-color','White');
    }
  });



