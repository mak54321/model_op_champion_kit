<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    require 'class.smtp.php';
    require 'class.phpmailer.php';
    

    $user_email = $_POST['userEmail'];
    $unique_id = $_POST['uniqueId'];
    $current_page_url = $_POST['currentPageUrl'];
    $all_inputs = $_POST['allInputs'];
    $all_inputs_in_array = $_POST['allInputs'];
    $table_1=$_POST['table_1'];
    $table_2=$_POST['table_2'];
    $table_3=$_POST['table_3'];
    $table_4=$_POST['table_4'];
    $table_5=$_POST['table_5'];
    $table_6=$_POST['table_6'];
    $url=$_POST['url'];

  
   
    $at_index_1 = "id" . $unique_id;

    array_splice($all_inputs, 0, 0, $at_index_1);

    // ---------------------------------------------------------------------------------
    // Sending(Writing) Data In CSV File

    $file_open = fopen("../data.csv", "a");
    $no_rows = count(file("../data.csv"));
    if ($no_rows > 1) {
        $no_rows = ($no_rows - 1) + 1;
    }

    $form_data = $all_inputs;
    fputcsv($file_open, $form_data);

    
    $from = "emeraldsoft.uk";

    $body = "";
    $body .= "EmeraldSoft Order.";
    $body .= "<h1>Table 1 </h1> <br>";
    $body .= $table_1;
    $body .= "<h1>Table 2 </h1> <br>";
    $body .= $table_2;
    $body .= "<h1>Table 3 </h1> <br>";
    $body .= $table_3;
    $body .= "<h1>Table 4 </h1> <br>";
    $body .= $table_4;
    $body .= "<h1>Table 5 </h1> <br>";
    $body .= $table_5;
    $body .= "<h1>Table 6 </h1> <br>";
    $body .= $table_6;
    $body .= $url;
    
   
  //   $to = $email;
    $subject = "Thank you for choosing EmeraldSoft";
    // $from = "EmeraldSoft Inc.";
    $headers = "From:" . $from;


    //mail($to,$subject,$body,$headers);

    $fromname = 'contact us';
    $mail = new PHPMailer();


    //$mail->FromName($fromname);

    $mail->isHTML(true);

    $mail->setFrom('emeraldsoft.uk', 'EmeraldSoft');

    $mail->addAddress($user_email);

    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody    = $body;



    if (!$mail->Send()) {

       echo "Mailer Error: " . $mail->ErrorInfo;
    } else {

       echo "Feedback has been sent";

    }

// ---------------------------------------------------------------------------------



}
