<?php declare (strict_types = 1);
namespace Alfa;

class Usuario 
{

    //Atributos da classe
    public static $dbh;
    public static $arquivoLog;
    public $id;
    public $email;
    public $senha;
    public $ultimo_login;

    //Método Construtor
    public function __construct(array $dados, \PDO $dbh)
    {
        self::$dbh = $dbh;
        $this->hydrate($dados);
    }
    
    //Métodos
    public function persistir()
    {
        $sql = 'INSERT INTO usuario (email, senha, ultimo_login) VALUES (:email, :senha, NOW() )';
        $stmt = self::$dbh->prepare($sql);
        $stmt->bindParam(':email', $this->email, \PDO::PARAM_STR);
        $stmt->bindParam(':senha', $this->senha, \PDO::PARAM_STR);
        $stmt->execute();
    }

    public function autenticar(): bool
    {
        $sql = "SELECT senha FROM usuario WHERE email = :email LIMIT 1";
        $stmt = self::$dbh->prepare($sql);
        $stmt->bindParam(':email', $this->email, \PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetchObject();
        if( $result ){
            return password_verify($this->senha, $result->senha);   
        }else{
            return FALSE;
        }
        //self::log('Tentativa de Autenticação detectada. Usuário: '.$this->email);
        // return TRUE;
    }
    
    //Incluir uma Trait na classe
    use Traits\Hidratacao;

    public static function log($evento)
    {
        $date = new \DateTime();
        self::$arquivoLog = __DIR__ . '/../../data/log/' . $date->format('Y-m-d') . '.log';
        $hora = $date->format('H:i:s');
        file_put_contents(self::$arquivoLog, sprintf('%s %s'.PHP_EOL, $hora, $evento), FILE_APPEND);
    }

    public function __destruct()
    {
        self::log('Objeto Destruido');
    }
    
}