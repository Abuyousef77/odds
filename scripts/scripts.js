// front end logic
$(function() {
  $("form").submit(function() {
    $("#info").show();
    $("#info2").show();
    event.preventDefault();
    var num = $(this.answer).val();
    var currentnumber = 1;
    while(currentnumber <= num) {
      var newentry = $("<li>" + currentnumber + "</li>");
      var evenslist = $("#even");
      var oddslist = $("#odds");
      if (iseven(currentnumber)) {
        newentry.appendTo(evenslist);
      } else {
        newentry.appendTo(oddslist);
      }
      for (var index = 0; index < 1; index += 1) {
        alert("Here are your answers!");
      }
        ++currentnumber;
      }
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
