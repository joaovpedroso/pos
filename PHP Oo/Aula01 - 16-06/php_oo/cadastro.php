<?php
require_once '../../autoload.php';

use Alfa\Usuario;

$dados = $_POST;

$dsn = 'mysql:host=localhost;dbname=alfa_turma3';
$dbh = new PDO($dsn, 'root', '');

if( $dados['senha'] == $dados['confirmacao_senha'] ){
	//Hashear a senha password_hash(ATRIBUTO A SER HASHEADO, CONSTANTE)
	$dados['senha'] = password_hash($dados['senha'], PASSWORD_BCRYPT );

	$usuario = new Usuario($dados, $dbh);
	$usuario->persistir();
	var_dump($usuario);
}