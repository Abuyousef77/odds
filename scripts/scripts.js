// front end logic
$(function() {
  $("form").submit(function() {
    $("#info").show();
    $("#info2").show();
    event.preventDefault();
    var num = $(this.answer).val();
    var currentnumber = 1;
    for(i = 0; i <= num; i +=1 ) {
      var newentry = $("<li>" + currentnumber + "</li>");
      var evenslist = $("#even");
      var oddslist = $("#odds");
      if (iseven(currentnumber)) {
        newentry.appendTo(evenslist);
      } else {
        newentry.appendTo(oddslist);
      }
      ++currentnumber;
    }
    // for (i = num; i >= 100; i -= num) {
    //  alert("Wow that is a lot of numbers!");
    // }
  });
});

    // back end logic
function iseven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
