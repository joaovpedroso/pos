<?php
require_once '../../autoload.php';

use Alfa\Usuario;

$u = new Usuario('joao@mail.com','123');
print_r($u);