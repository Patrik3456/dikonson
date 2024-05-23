<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'E:\WBA\Záverečná_Práce\vendor\phpmailer\phpmailer\src\Exception.php';
require 'E:\WBA\Záverečná_Práce\vendor\phpmailer\phpmailer\src\PHPMailer.php';
require 'E:\WBA\Záverečná_Práce\vendor\phpmailer\phpmailer\src\SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'patrikvaleska@gmail.com';
    $mail->Password = 'hoggovnov07';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('patrikvaleska@gmail.com', 'Mailer');
    $mail->addAddress($_POST['email'], 'Joe User');

    $mail->isHTML(true);
    $mail->Subject = 'Ověřovací kód';
    $mail->Body    = 'Váš ověřovací kód je: ' . $_POST['code'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
