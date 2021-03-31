<?php
header('Content-Type: application/json');

require 'lib/PHPMailerAutoload.php';

$captcha = $_POST['token'];

if($captcha){
    $secretKey = "6LcxLuEUAAAAANI-T3hsifE49uowTMOCTxme6ILY";
    $ip = $_SERVER['REMOTE_ADDR'];

    // post request to server
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array('secret' => $secretKey, 'response' => $captcha);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $responseKeys = json_decode($response,true);
    header('Content-type: application/json');

    if($responseKeys["success"]) {

        $mail = new PHPMailer;
        $mail->CharSet = "UTF-8";
        $mail->isHTML(true);                                  // Set email format to HTML
        // $mail->IsSMTP(); // enable SMTP
        // $mail->Host = 'smtp.gmail.com';  // Specify main and backup server
        // $mail->Port = 465; 
        // $mail->SMTPAuth = true;                               // Enable SMTP authentication
        // $mail->Username = 'LOGIN';                            // SMTP username
        // $mail->Password = 'SENHA';                           // SMTP password
        // $mail->SMTPSecure = 'tls';

        $mail->From = $_POST['email'];

        $mail->FromName = $_POST['name'];

        $mail->addAddress('mateus_gruber@hotmail.com.br', "Villa D'Ancona");
        // $mail->addAddress('info@villadancona.com', "Villa D'Ancona");

        $mail->Subject = "[Villa D'Ancona] Contato";

        ob_start();

        include "contato-email.php";

        $message = ob_get_contents();

        ob_end_clean();

        $mail->Body = $message;

        if (!$mail->send()) {
            header('HTTP/1.1 400 Bad Request', true, 400);
            $result = array('status'=>"error", 'message'=>"Mailer Error: ".$mail->ErrorInfo);//
            echo json_encode($result);
            exit;
        } else {
            $result = array('status'=>"success", 'message'=>"Enviado com sucesso");
            echo json_encode($result);
        }

    } else {
        header('HTTP/1.1 400 Bad Request', true, 400);
        echo json_encode(array('status' => 'error', 'message' => "Erro ao confirmar recaptcha. Tente novamente."));
    }
} else {
    header('HTTP/1.1 400 Bad Request', true, 400);
    $result = array('status'=>"error", 'message'=>"Recaptcha inválido");
    echo json_encode($result);
    exit;
}