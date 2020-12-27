<?php

$firstname = $_POST['firstname'];
$middlename= $_POST['middlename'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$text=$_POST['text'];

$firstname = htmlspecialchars($firstname);
$middlename= htmlspecialchars($middlename);
$lastname = htmlspecialchars($lastname);
$email = htmlspecialchars($email);
$text= htmlspecialchars($text);

$firstname = htmlspecialchars($firstname);
$middlename= htmlspecialchars($middlename);
$lastname = htmlspecialchars($lastname);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$firstname = urldecode($firstname);
$middlename= urldecode($middlename);
$lastname = urldecode($lastname);
$email = urldecode($email);
$text= urldecode($text);

$firstname = trim($firstname);
$middlename= trim($middlename);
$lastname = trim($lastname);
$email = trim($email);
$text=trim($text);

//echo $firstname;
//echo "<br>";
//echo $middlename;
//echo "<br>";
//echo $lastname;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $text;

if (mail("example@mail.ru", "Заказ с сайта", "Имя:".$firstname.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>