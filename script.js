var today = moment().format('LLL');
$("#currentDay").text(today);

var currentTime = moment().format('HH');


$(document).ready(function(){
    $(".saveBtn").on("click", function () {
         console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");
        localStorage.setItem  (time,text);
    })});
    

   $(".time-block").each(function () {
        var userInput = parseInt($(this).attr("id"));

        if (userInput > currentTime) {
            $(this).addClass("future")

        } else if (userInput == currentTime) {

            $(this).addClass("present")

        }
        else {
            $(this).addClass("past")

        };

        $("#" + userInput).val(localStorage.getItem(userInput))
    });