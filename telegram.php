<?php

/* https://api.telegram.org/bot7431585584:AAH-j6h-dOnrCKzSv9CQS-t_fYWBSBKY1oU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "7431585584:AAH-j6h-dOnrCKzSv9CQS-t_fYWBSBKY1oU";
$chat_id = "-4253018000";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Сообщение: ' => $message,
);

foreach($arr as $key => $value) {
  $text .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>