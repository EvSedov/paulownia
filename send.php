<?php 

    require 'PHPMailer.php';
    require 'SMTP.php';
    require 'Exception.php';

    if (!error_get_last()) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $message = htmlspecialchars($_POST['message']);
        $message = urldecode($message);
        $message = trim($message);

        $mail = new PHPMailer\PHPMailer\PHPMailer();

        $mail->isSMTP();                                    // Set mailer to use SMTP
        $mail->CharSet = 'utf-8';
        $mail->SMTPAuth = true;                             // Enable SMTP authentication

        $mail->Host = 'mail.karbon-biotech.com';  																							// Specify main and backup SMTP servers
        $mail->Username = 'info@karbon-biotech.com';        // Ваш логин от почты с которой будут отправляться письма
        $mail->Password = ']3JUjccVW4?uXAP/';                // Ваш пароль от почты с которой будут отправляться письма
        $mail->SMTPSecure = 'ssl';                          // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;                                  // TCP port to connect to / этот порт может отличаться у других провайдеров
        $mail->setFrom($email);                             // от кого будет уходить письмо?
        $mail->addAddress('info@karbon-biotech.com');       // Кому будет уходить письмо 
        $mail->isHTML(true);                                // Set email format to HTML
        $mail->Subject = 'Письмо с сайта karbon-biotech.com';
        $mail->Body    = '' .$name . ' написал письмо<br>Телефон: ' .$phone. '<br>Почта: ' . $email . '<br>Сообщение: ' . $message;
        // $mail->AltBody = '';
        
        if(!$mail->send()) {
            echo 'Error';
        } else {
            header('location: index.html');
        }
    } else {
        $data['result'] = "error";
        $data['info'] = "В коде присутствует ошибка";
        $data['desc'] = error_get_last();
    }

    header('Content-Type: application/json');
    echo json_encode($data);

?>