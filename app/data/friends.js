$('#addBtn').on("click", function(){
    var friendSurvey = {
        question1: $('#question1').val().trim(),
        question2: $('#question2').val().trim(),
        question3: $('#question3').val().trim(),
        question4: $('#question4').val().trim(),
        question5: $('#question5').val().trim(),
        question6: $('#question6').val().trim(),
        question7: $('#question7').val().trim(),
        question8: $('#question8').val().trim(),
        question9: $('#question9').val().trim(),
        question10: $('#question10').val().trim()
    };
    console.log(friendSurvey);

    return false;
});