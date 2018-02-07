<?php
require './PHPMailer/PHPMailerAutoload.php';

//Establecemos quien va a administrar los correos

$MailAdmin = "karladelgado.r94@gmail.com";

//=====================================
//ENVIO DESDE FORMULARIO VITALMOVE

if(isset($_POST['NAME_SUBMIT_FORM'])){

$correo = $_POST['NAME_EMAIL']; 
$asunto = $_POST['NAME_ASUNTO']; 

$mensaje = "<h1>MENSAJE PARA &nbsp;VITALMOVE : ". $asunto . "</h1>  ";
$mensaje = $mensaje . " <p>Enviado por :". $correo ."</p>";
$mensaje = $mensaje . " <p>". $_POST['NAME_DESCRIP'] ."</p>";


//$mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail = new PHPMailer;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.vitalmove.cl';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'entrena@vitalmove.cl';                 // SMTP username
$mail->Password = 'ke26111310';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                // TCP port to connect to

$mail->setFrom('entrena@vitalmove.cl', 'Mailer');
$mail->addAddress($MailAdmin ,$correo);    


$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'VITALMOVE CONSULTA';
$mail->Body    = $mensaje;



if(!$mail->send()) {

  $msg = "1";
   echo 'Error del mensaje: ' . $mail->ErrorInfo;

} else {

  $msg = "0";
}
      
     //header('Location: VMinicio.php?msg='.$msg);
    header('Location: welcome.php?msg='.$msg);


}




?>