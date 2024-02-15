<?php

class Base{
    function baseDatos(){
        $host = 'localhost';
        $dbname = 'pruebas_locas';
        $username = 'root';
        $password = '';

        try{
            $conn = new PDO ("mysql:host=$host;dbname=$dbname",$username,$password);
            echo "Si me conecté";
        } catch (PDOException $exp) {
            echo ("No pude conectarme con las: $dbname, error: $exp");
        }
        return $conn;
    }
}

?>