<?php declare (strict_types = 1);
require_once 'Usuario.php';

class Admin extends Usuario
{    
    public $matricula;
    
    function __construct(string $email, string $senha, int $matricula) 
    {
        $this->email = $email;
        $this->senha = $senha;
        $this->matricula = $matricula;
        
        parent::log('Admin');
        
    }   
}
