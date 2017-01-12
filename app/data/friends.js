//Ripped some dudes required checks - https://toddmotto.com/progressively-enhancing-html5-forms-creating-a-required-attribute-fallback-with-jquery/

$(function () {
  
  // feature detect
  var supportsRequired = 'required' in document.createElement('input');
  
  // loop through required attributes
  $('[required]').each(function () {
  
    // if 'required' isn't supported
    if (!supportsRequired) {
    
      // this
      var self = $(this);
    
      // swap attribute for class
      self.removeAttr('required').addClass('required');
      
      // append an error message
      self.parent().append('<span class="form-error">Required</span>');
      
    }
    
  })
  
  // submit the form
  $('.form').on('submit', function (e) {
  
    // loop through class name required
    $('.required').each(function () {
    
      // this
      var self = $(this);
      
      // run the empty/not:checked test
      if (self.val() === '') {
          
        // show error if the values are empty still (or re-emptied)
        // this will fire after it's already been checked once
        // self.siblings('.form-error').show()
        alert("Please answer all the fields");
        
        // stop form submitting
        e.preventDefault();
      
      // if it's passed the check
      } 
      
    });
    
    // all other form submit handlers here - ie my code!

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
    
    

    $.get('http://localhost:8080/api/friends').done(function(data){
       
                var friendDifference = 0;
                var differenceTotal = 0;
                
                var friendScores = [];

                
                for (i=0; i < data.length; i++) {

                    for (j=0; j < data[i].scores.length; j++) {
                        if (friendSurvey.scores[j] != data[i].scores[j]){
                            friendDifference = Math.abs(friendSurvey.scores[j] - data[i].scores[j]);
                            
                            differenceTotal += friendDifference;  
                        }     
                    }
                    
                    friendScores.push(differenceTotal);
                    differenceTotal = 0;
                    console.log(friendScores);
                
                };
                var smallestDifference = Math.min.apply(null,friendScores);
                
                var matchedFriendName = "";
                var matchedFriendPhoto = "";
                for (k=0; k< friendScores.length; k++){
                    if (smallestDifference === friendScores[k]) {
                        matchedFriendName = data[k].name;
                        matchedFriendPhoto = data[k].photo;
                    }
                }

                $("#chosenFriend").html(matchedFriendName);
                $("#chosenPhoto").attr("src", matchedFriendPhoto);
                $("#myModal").modal('toggle');
                

                $.post('http://localhost:8080/api/friends', friendSurvey)
                .complete(function(data) {
                    console.log(data);          
                    
                });
            });

                
            return false;

  });
});