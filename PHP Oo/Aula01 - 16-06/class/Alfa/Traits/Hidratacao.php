<?php
namespace Alfa\Traits;

trait Hidratacao
{
	//Realizar a hidratação dos dados vindos do formulário através de um array
	public function hydrate(array $dados)
	{
        //Obter atributos da classe
		$atributos = get_object_vars($this);

        //Percorrer os dados vindos do formulário
		foreach ($dados as $nome => $valor) {
            //Verificar se existe na classe um atributo com o nome do campo
			if( in_array($nome, array_keys($atributos) ) ){
                //Atribuir aos atributos da classe o valor vindo do formulário
				$this->$nome = $valor;
			}
		}
	}
}