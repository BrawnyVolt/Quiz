$(document).ready(function() {
  $("form#quiz").submit(function() {

    var question1 = parseInt($("input:radio[name=question1]:checked").val());

    if(isNaN(question1)) {
      var question1 = 0
    }
    
    var question2 = parseInt($("input:radio[name=question2]:checked").val());

    if(isNaN(question2)) {
      var question2 = 0
    }
    
    var question3 = parseInt($("input:radio[name=question3]:checked").val());

    if(isNaN(question3)) {
      var question3 = 0
    }
    
    var question4 = parseInt($("input:radio[name=question4]:checked").val());

    if(isNaN(question4)) {
      var question4 = 0
    }
    
    var question5 = parseInt($("input:radio[name=question5]:checked").val());

    if(isNaN(question5)) {
      var question5 = 0
    }

    var question6 = parseInt($("input:radio[name=question6]:checked").val());

    if(isNaN(question6)) {
      var question6 = 0
    }

    var question7 = parseInt($("input:radio[name=question7]:checked").val());

    if(isNaN(question7)) {
      var question7 = 0
    }

    // if(isNaN(parseInt($("input:radio[name=question7]:checked").val()))) {
    //   var q7 = 0
    // } else {
    //   var q7 = parseInt($("input:radio[name=question7]:checked").val());
    // }

     var total = (question1 + question2 + question3 + question4 + question5 + question6 + question7);

    // var q2 = parseInt($("input:radio[name=question2]:checked").val());
    // var q3 = parseInt($("input:radio[name=question3]:checked").val());
    // var q4 = parseInt($("input:radio[name=question4]:checked").val());
    // var q5 = parseInt($("input:radio[name=question5]:checked").val());
    // var q6 = parseInt($("input:radio[name=question6]:checked").val());
    // var q7 = parseInt($("input:radio[name=question7]:checked").val());
     
    if(total <= 12) {
      alert("Ruby is the one for you!")
    } else if(total <= 17) {
      alert ("C# all the way!")
    } else {
      alert("JavaScript all day, every day!")
    }
    event.preventDefault();

  });
});