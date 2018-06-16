<?php declare (strict_types = 1);
class Usuario 
{

    //Atributos da classe
    public static $arquivoLog;
    public $email;
    public $senha;

    //Método Construtor
    public function __construct(string $email, string $senha)
    {
       $this->email = $email;
       $this->senha = $senha;
    }
    
    //Métodos
    public function autenticar(): bool
    {
       self::log('Tentativa de Autenticação detectada. Usuário: '.$this->email);
        return TRUE;
    }
    
    public static function log($evento)
    {
        $date = new DateTime();
        self::$arquivoLog = __DIR__ . '/../data/log/' . $date->format('Y-m-d') . '.log';
        $hora = $date->format('H:i:s');
        file_put_contents(self::$arquivoLog, sprintf('%s %s'.PHP_EOL, $hora, $evento), FILE_APPEND);
    }
    
    public function __destruct()
    {
        self::log('Objeto Destruido');
    }
    
}