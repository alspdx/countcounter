$(document).ready(function() {
  $('#user-input').submit(function(event){
    event.preventDefault();
    var countStart = parseInt($('#count-start').val());
    var countTo = parseInt($('#count-to').val());
    var countBy = parseInt($('#count-by').val());

    if (isNaN(countStart) || isNaN(countTo) || isNaN(countBy)) {
      alert("Hey ding-dong! Fill it out correctly!");
    } else if (countStart < 0 || countTo < 0 || countBy < 0) {
      alert("Please use positive numbers! (No negativity here.)");
    } else if (countBy > countTo) {
      alert("What are you, stupid? You can't count by " + countBy + " if you can only count up to " + countTo + "!");
    } else {
      for (i = countStart; i < countTo; i += countBy) {
        $('#count-div').append('<div class="d-inline-block"><img src="images/thecount.png" class="small-count">'+i+' ah ah!</div>');
      };
    };
  });
});
