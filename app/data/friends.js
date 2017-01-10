$('#addBtn').on('click', function(){

    var friendSurvey = {
        name: $('#name').val().trim(),
        photo: 'http://' + $('#photo').val().trim(),
        scores: [
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
       
    };
    
   

    $.post('http://localhost:8080/api/friends', friendSurvey)
    .done(function(data) {
        console.log(data);
        
    });

    return false;
});

