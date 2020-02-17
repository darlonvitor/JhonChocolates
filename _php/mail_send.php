    <?php
     
    function pegaValor($valor) {
        return isset($_POST[$valor]) ? $_POST[$valor] : '';
    }
     
    function validaEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
     
    function enviaEmail($de, $assunto, $mensagem, $para, $email_servidor) {
        $headers = "From: $email_servidor\r\n" .
                   "Reply-To: $de\r\n" .
                   "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      
      mail($para, $assunto, nl2br($mensagem), $headers);
    }
     
    $email_servidor = "email@servidor.com";
    $para = "jhonnchocolates@gmail.com";
    $de = pegaValor("email");
    $mensagem = pegaValor("mensagem");
	$aux = pegaValor("nome");
	$aux2 = " - ";
	$aux2 .= pegaValor("assunto");
	$aux .= $aux2;
    $assunto = $aux;
	
	if (validaEmail($de) && $mensagem) {
        enviaEmail($de, $assunto, $mensagem, $para, $email_servidor);
        $pagina = "../contato.html";
    } else {
		echo "<script type='javascript'>alert('Houve um erro !!! Sua mensagem não foi enviada');";
        $pagina = "../contato.html";
    }
     
    header("location:$pagina");
     
    ?>