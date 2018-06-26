<?php
namespace Alfa;

use Alfa\Abstracao\BancoDeDados;

class MySQl implements BancoDeDados
{
	public function conectar($host, $bd, $user, $pass)
	{
		return '';
	}
}