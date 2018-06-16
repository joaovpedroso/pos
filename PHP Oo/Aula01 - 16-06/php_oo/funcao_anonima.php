<?php

//Declarando função anônima
//$f = function()
//{
//    echo 'Função anônima';
//};

//Chamando a Função
//$f();

//function x($p)
//{
//    return $p + 1;
//}

$a = [1,2,3];
$a = array_map(function ($p) { return $p + 1; }, $a);
var_dump($a);