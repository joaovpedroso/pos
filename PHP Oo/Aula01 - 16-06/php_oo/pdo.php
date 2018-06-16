<?php

//' Declaração do tipo de banco : host=servidor; dbname=banco'
$dsn = 'mysql:host=localhost;dbname=mysql';
$dbh = new PDO($dsn, 'root', '');

$sql = 'SHOW TABLES';

$stmt = $dbh->prepare($sql);
$stmt ->execute();

while( $record = $stmt->fetchObject() ){
    echo $record->Tables_in_mysql . "<br>";
}
$dbh = NULL;