// Date will pull in automatically using Moment
var now = moment().format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
console.log(now);

$(document).ready(function(){
// these are the local storage data identifiers, defined below. These are "getting" items from local storage on page load
  $('#9').html(window.localStorage.ninedata)
  $('#10').html(window.localStorage.tendata);
  $('#11').html(window.localStorage.elevendata);
  $('#12').html(window.localStorage.twelvendata);
  $('#13').html(window.localStorage.thirteendata);
  $('#14').html(window.localStorage.fourteendata);
  $('#15').html(window.localStorage.fifteendata);
  $('#16').html(window.localStorage.sixteendata);
  $('#17').html(window.localStorage.seventeendata);

// assignment of variables for the function for the click
  $(".saveBtn").on("click",function (){
  var typedMessage9 = $('#9').text();
  var typedMessage10 = $('#10').text();
  var typedMessage11 = $('#11').text();
  var typedMessage12 = $('#12').text();
  var typedMessage13 = $('#13').text();
  var typedMessage14 = $('#14').text();
  var typedMessage15 = $('#15').text();
  var typedMessage16 = $('#16').text();
  var typedMessage17 = $('#17').text();

// setting local storage with a key and a value
  localStorage.setItem("9:00", typedMessage9);
  localStorage.setItem("10:00", typedMessage10);
  localStorage.setItem("11:00", typedMessage11);
  localStorage.setItem("12:00", typedMessage12);
  localStorage.setItem("13:00", typedMessage13);
  localStorage.setItem("14:00", typedMessage14);
  localStorage.setItem("15:00", typedMessage15);
  localStorage.setItem("16:00", typedMessage16);
  localStorage.setItem("17:00", typedMessage17);
  console.log(localStorage)
        
//this is assigning local storage with a value
  localStorage.ninedata = typedMessage9;
  localStorage.tendata = typedMessage10;
  localStorage.elevendata = typedMessage11;
  localStorage.twelvendata = typedMessage12;
  localStorage.thirteendata = typedMessage13;
  localStorage.fourteendata = typedMessage14;
  localStorage.fifteendata = typedMessage15;
  localStorage.sixteendata = typedMessage16;
  localStorage.seventeendata = typedMessage17;
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
  
