// Date will pull in automatically using Moment
var now = moment().format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
console.log(now);

$(document).ready(function(){
// these are the local storage data identifiers, defined below. These are "getting" items from local storage on page load


  for (let index = 9; index < 18; index++) {
    if (localStorage.getItem(index+":00")){
      $('#'+index).html(localStorage.getItem(index+":00"))
    
    }
    
  }



// assignment of variables for the function for the click
  $(".saveBtn").on("click",function (){

    var dataId = $(this).attr("data-id")
    var typedMessage = $('#' +dataId).text();

    localStorage.setItem(dataId+ ":00", typedMessage);

  console.log(localStorage)
        

  })
  
  });
// end of local storage

// this function takes the current hour from the date function and parses he in the corresponding colorcode div
// based on the time parameters of the parsed information, it will determine the timeframe for each color change 
var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 9){
      $(this).css('background-color', '#77dd77');
    }else if(val < currentHour && val > currentHour-14){
      $(this).css('background-color', '#d3d3d3');
    }else if(val === currentHour){
      $(this).css('background-color','#ff6961');
    }else{
      $(this).css('background-color','white');
    }
  });


// This will clear local storage and wipe the page of contents so that user can enter new notes on a new day
$("#eraseButton").on("click",function () {
    localStorage.clear();
    location.reload();
    });
  
