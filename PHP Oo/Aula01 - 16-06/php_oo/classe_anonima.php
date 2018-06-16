<?php

$parametros = 2;
//Declarando e utilizando um objeto anônimo(Classe)
$o = new class($parametros){
  
    public $x;
    public $y;
    
    public function __construct($z)
    {
        $this->x = 3;
        $this->y = $z;
    }
    
};
var_dump($o);
print "<br>";

$dados = array
(
"nome" => "Joao"  ,
  "email" => "joao@mail.com"
);
$x = serialize($dados);
var_dump($x);
print "<br>";
$x2 = unserialize($x, ["allowed_classes" => [
    'Usuario',
    'Admin'
]]);
var_dump($x2);