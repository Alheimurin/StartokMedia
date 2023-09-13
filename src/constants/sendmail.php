<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'path/to/PHPMailer/src/Exception.php';
    require 'path/to/PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail-> CharSet = 'UTF-8';
    $mail->isHTML(true);

    $mail->setForm('dsadas@gmail.com');
    $mail->addAdress()
    $mail->subject('Заявка')

    if (!$mail->send()) {
        $message = 'oshibka'
    } else {
        $message = 'otpravka'
    }

    $response = ['message' => $message]

    header('Content-type: application/json')
    echo json_encode($response)

    ?>