      var msg;
      var nameId;
      var email;
      var form;
      var text;
      var textLength;
 	  function call() {
 	    msg   = $('#formx').serialize();
 	    nameId = $('#nameId').val();
 	    emailId = $('#emailId').val();
 	    form = $('#formx');
 	    text = document.getElementById('textAreaId');
 	    textLength = text.value.trim().length;
 	    if ((nameId.length !== 0) && (emailId.indexOf('@', 0) !== -1) && (textLength !== 0)){
          $.ajax({
            type: 'POST',
            url: 'email.php',
            data: msg,
            success: function(data) {
              $('#result').html("Thank you! Your message has been sent successfully.").fadeIn();
              $('#nameResult').html('');
              $('#emailResult').html('');
              text.setAttribute('placeholder', 'Message');
              text.value = '';
              $('#textAreaResult').html('');
              $('#result').fadeOut(10000);
            },
            error:  function(xhr, str){
	          alert('Error: ' + xhr.responseCode);
            }
          });
 	    } else{
 	        if (nameId.length === 0){
 	          $('#nameResult').html('<p>Please enter your name.</p>');
 	        } else{
 	          $('#nameResult').html('');
 	        }
 	        if (emailId.indexOf('@', 0) === -1){
 	          $('#emailResult').html('<p>Please enter your email.</p>');
 	        } else{
 	          $('#emailResult').html('');
 	        }
 	        if (textLength === 0){
 	          $('#textAreaResult').html('<p>Please enter your message.</p>');
 	          text.value = '';
  	        } else{
 	          text.setAttribute('placeholder', 'Message');
 	          $('#textAreaResult').html('');
 	        }
 	    }
  	 }