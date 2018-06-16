<?php

declare (strict_types = 1);

//Realizando ligação do arquivo PHP com a classe Usuário
require_once '../../class/Usuario.php';

//Instanciando Novo Objeto
$u = new Usuario("jao.victor.dp@gmail.com", "md5");
//$u->email = "jao.victor.dp@gmail.com";
//$u->senha = "md5";

var_dump($u);

if ($u->autenticar()) {
    print "Ok";
}