<?php

session_start();

$name = $_POST['name'];
$email = $_POST['email'];
$subject = 'New Message Request Submitted by ' . $name;
$message = $_POST['message'];

// Checking For Captcha..
if ( isset($_SESSION['captcha']))
    if ($_SESSION['captcha']){
            // Recipient
            $toEmail = 'gheorghe_iulia2012@yahoo.com';
    
            // Sender
            $from = $email;
            $fromName = $name;
    
            // Subject
            $emailSubject = 'New Message Request Submitted by '.$name;
    
            // Message
            $htmlContent = '<h2>Contact Form Request</h2>
                        <p><b>Name:</b> '.$name.'</p>
                        <p><b>Email:</b> '.$email.'</p>
                        <p><b>Subject:</b> '.$subject.'</p>
                        <p><b>Message:</b><br/>'.$message.'</p>';
    
            // Header for sender info
            $headers = "From: $fromName"." <".$from.">";
    
    
            // Message lines should not exceed 70 characters (PHP rule)
            // $message = wordwrap($message, 70, "\r\n");
    }
        // Send Mail
        // Set content-type header for sending HTML email
        $headers .= "\r\n". "MIME-Version: 1.0";
        $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";

            if(mail($toEmail , $emailSubject , $htmlContent, $headers))
                header("Location: contact.php?success=true");
            else {
                $failedData = array($name, $email, urlencode($message));
                header("Location: contact.php?success=false&key=" . base64_encode(implode("-&&&&-",$failedData)));
            }

?>