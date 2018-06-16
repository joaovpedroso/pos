<?php declare (strict_types = 1);
class Usuario 
{

    //Atributos da classe
    public $email;
    public $senha;

    //Método Construtor
    function __construct(string $email, string $senha)
    {
       $this->email = $email;
       $this->senha = $senha;
    }
    
    //Métodos
    function autenticar(): bool
    {
        return TRUE;
    }
    
}
