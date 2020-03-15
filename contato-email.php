<!DOCTYPE html>

<html>

<head>

	<title></title>

</head>

<body>



<span style="font:12px/16px Arial, sans-serif; color:#000;">


<p>

	<b>Nome:</b> <?= $_POST['name'] ?><br>
	<b>Telefone:</b> <?= $_POST['phone'] ?><br>
	<b>E-mail:</b> <?= $_POST['email'] ?><br>

</p>



<p><b>Mensagem:</b> <?= nl2br($_POST['message']) ?></p>



<p>--------------------------------------------------<br>

Mensagem enviada pelo formulário de contato do site Villa D'Ancona</p>



</span>



</body>

</html>