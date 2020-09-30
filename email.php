<?php
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];
$name = htmlspecialchars($name);
$telephone = htmlspecialchars($telephone);
$message = htmlspecialchars($message);
$name = urldecode($name);
$telephone = urldecode($telephone);
$message = urldecode($message);
$name = trim($name);
$email = trim($email);
$telephone = trim($telephone);
$message = trim($message);
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $message;
echo "<br>";
echo $telephone;

if 
(mail("wwwzigzagstudio@gmail.com", 
"Заявка с сайта",
"ФИО:" .$name. 
", Telephone:" .$telephone. 
", Message: " .$message ,
", From:" .$email))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>