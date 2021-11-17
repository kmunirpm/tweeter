//function to track character count in textarea
$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on('keyup', function() {
    let txtLen = $(this).val();
    let numOfCharLeft = 140 - txtLen.length;
    counterObj = $(this).parent().find('.counter');
    //console.log($(this).parent().find(".counter").val());
    //console.log(numOfCharLeft)
    counterDisplay(counterObj, numOfCharLeft)
  });
});

