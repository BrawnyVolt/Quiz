$(document).ready(function() {
  $("form#quiz").submit(function() {
    if(isNaN(parseInt($("input:radio[name=question1]:checked").val()))) { //checks for blank radios, changes them to zero
      var q1 = 0
    } else {
      var q1 = parseInt($("input:radio[name=question1]:checked").val());
    }

    if(isNaN(parseInt($("input:radio[name=question2]:checked").val()))) {
      var q2 = 0
    } else {
      var q2 = parseInt($("input:radio[name=question2]:checked").val());
    }


    if(isNaN(parseInt($("input:radio[name=question3]:checked").val()))) {
      var q3 = 0
    } else {
      var q3 = parseInt($("input:radio[name=question3]:checked").val());
    }


    if(isNaN(parseInt($("input:radio[name=question4]:checked").val()))) {
      var q4 = 0
    } else {
      var q4 = parseInt($("input:radio[name=question4]:checked").val());
    }


    if(isNaN(parseInt($("input:radio[name=question5]:checked").val()))) {
      var q5 = 0
    } else {
      var q5 = parseInt($("input:radio[name=question5]:checked").val());
    }


    if(isNaN(parseInt($("input:radio[name=question6]:checked").val()))) {
      var q6 = 0
    } else {
      var q6 = parseInt($("input:radio[name=question6]:checked").val());
    }


    if(isNaN(parseInt($("input:radio[name=question7]:checked").val()))) {
      var q7 = 0
    } else {
      var q7 = parseInt($("input:radio[name=question7]:checked").val());
    }

     var total = (q1 + q2 + q3 + q4 + q5 + q6 + q7);

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