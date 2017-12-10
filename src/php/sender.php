<?php
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // Get the form fields.
        if(isset($_POST['name']))
            $name = $_POST['name'];
        if(isset($_POST['email']))
            $email = $_POST['email'];
        if(isset($_POST['company']))
             $company = $_POST['company'];
        if(isset($_POST['phone']))
             $phone = $_POST['phone'];
        if(isset($_POST['message']))
             $message = $_POST['message'];
        if(isset($_POST['g-recaptcha-response']))
            $captcha = $_POST['g-recaptcha-response'];

        if(!$captcha)
        {
            http_response_code(400);
            echo "Oops! You have to check the captcha.";
            exit;
        }

        if ( $name == null || $email == null || $message == null ) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! You have to fill all required fields.";
            exit;
        }   

        if(filter_var($email, FILDER_VALIDATE_EMAIL) === FALSE)
        {
            http_response_code(400);
            echo "Oops! Email seem to be invalid.";
            exit;           
        }

        // Check that data was sent to the mailer.

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "support@virtualit.online";

        // Set the email subject.
        $subject = $name." sent a message. | virtualit.online";

        // Build the email content.
        $email_content .= "Name:		".$name."\n";
        $email_content .= "Email:		".$email."\n";
        $email_content .= "Company:		".$company."\n\n";
        $email_content .= "Phone:		".$phone."\n\n";
        $email_content .= "Message:		".$message."\n\n";

        // Build the email headers.
        $email_headers = "From: <$email>";

        $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=YOUR SECRET KEY&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']), true);

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your application has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong, please try again.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>