  $(function() {
      // Get the form.
      var form = $('#ajax-form');

      // Get the messages div.
      //var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        var formData = $(form).serialize() + "&name=" + $('#name').val() + "&email=" + $('#email').val() + "&company=" + $('#company').val() + "&phone=" + $('#phone').val() + "&message=" + $('#message').val();

        //var formData = new FormData($(form)[0]);


        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            grecaptcha.reset();

            Materialize.toast(response, 4000);

            $('#ajax-form').fadeOut();

            // Clear the form.
            $('#description').val('');
            $('#att_link').val('');
            $('#email').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            grecaptcha.reset();

            // Set the message text.
            if (data.responseText !== '') {
                Materialize.toast(data.responseText, 4000);
            } else {
                Materialize.toast("Oops! An error occured try again later.", 4000);
            }
        });
    });
  });

  $("#ajax-sendbtn").click( function() {
      grecaptcha.execute();
  });

  function triggerForm()
  {
      $('#ajax-form').submit();
      $('#ajax-form').trigger();
  }