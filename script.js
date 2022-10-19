function updateClock() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(updateClock, 1000);


$(document).ready(function(){
$(".saveBtn").on("click", function () {
     console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");
    localStorage.setItem  (time,text);
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function tracker(){
     var timeNow = moment().hour();

    $(".time-block").each(function(){
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    
        
    if (timeBlock < timeNow){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
     }  
    else if (timeBlock === timeNow) {
        $(this).removeClass("future");
         $(this).removeClass("past");
         $(this).addClass("present");
     }  
    else {
         $(this).removeClass("present");
         $(this).removeClass("past");
         $(this).addClass("future");
     }
    })
}
     tracker();
})