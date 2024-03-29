// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function ()


  
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").on("click", function () {
    
    console.log($(this).siblings("textarea").val());
    var key = $(this).parent().attr("id")
    var text = $(this).siblings("textarea").val()
    localStorage.setItem(key, text);
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // HERE

  var key = time.format('[present] hour');
  $('#').text(key);
  
  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // 9 10 11 12 13 14 15 16 17
  for (let time = 9; time <= 17; time++) {
    // check if it's past, present, future and add CSS classes
    if (key < today) {
      $(this).addClass("past");
    } else if (key == today) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    console.log($('key'));
  
  };

// check localStorage for an item called 'hour-X' where X is the value of time
let key = 'hour-' + time;
let stored = localStorage.getItem(key);
if (!stored) {
  continue;
}
console.log(time + ": " + stored);
$('#' + key).children('textarea').val(stored);



//
// TODO: Add code to display the current date in the header of the page.
var today = dayjs().format('MM/DD/YYYY')
$("#currentDay").text(today);

// dayjs('2019-01-25').format('DD/MM/YYYY')

