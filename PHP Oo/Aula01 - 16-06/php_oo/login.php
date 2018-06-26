<?php

declare (strict_types = 1);

//Realizando ligação do arquivo PHP com a classe Usuário
require_once '../../class/Admin.php';

//Instanciando Novo Objeto
$a = new Admin("jao.victor.dp@gmail.com", "md5", 7829);
$u = new Usuario("jao.victor.dp@gmail.com", "md5");

//Destruindo o objeto
$u = NULL;

//Usuario::log('Usuario::Log');

var_dump($a);
print "<br>";
var_dump($u);


//$xx = serialize(OBJETO);
//$xx2 = unserialize($xx, {'allowed_classes'=>[
//    'Admin',
//    'Usuario'
//]});