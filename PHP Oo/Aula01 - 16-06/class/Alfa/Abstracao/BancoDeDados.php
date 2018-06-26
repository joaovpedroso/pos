<?php
namespace Alfa\Abstracao;

interface BancoDeDados
{
	public function conectar($host, $bd, $user, $pass);
	

}