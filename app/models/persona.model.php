<?php
require_once "../config/connection.php";
class Persona extends Connection{
    public static function mostrarDatos(){
        try{
            $sql = "SELECT * FROM persona";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchAll();
            //var_dump($result);
            return $result;
        }catch(PDOException $th){
            //echo $th->getMessage();
            return ['error en mostrar datos' => $th->getMessage()];
        }
    }
    public static function obtenerDatosId($id){
        try{
            $sql = "SELECT * FROM persona WHERE id = :id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $result = $stmt->fetch();
            return $result;
        }catch(PDOException $th){
            //echo $th->getMessage(); 
        } 
    }

    public static function guardarDatos($data){
        try{
            $sql = "INSERT INTO persona (nombre, email, contrasenia) VALUES (:nombre, :email, :contrasenia)";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(":nombre", $data['nombre']);
            $stmt->bindParam(":email", $data['email']);
            $stmt->bindParam(":contrasenia", $data['contrasenia']);
            $stmt->execute();
            return true;
        }catch(PDOException $th){
            //echo $th->getMessage();
        }
    }

    public static function actualizarDatos($data){
        try{
            $sql = "UPDATE persona SET nombre = :nombre, email = :email, contrasenia = :contrasenia WHERE id = :id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(":nombre", $data['nombre']);
            $stmt->bindParam(":email", $data['email']);
            $stmt->bindParam(":contrasenia", $data['contrasenia']);
            $stmt->bindParam(":id", $data['id']);
            $stmt->execute();
            return true;
        }catch(PDOException $th){
            echo $th->getMessage();
        }
    }

    public static function eliminarDatos($id){
        try{
            $sql = "DELETE FROM persona WHERE id = :id";
            $stmt = Connection::getConnection()->prepare($sql);
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            return true;
        }catch(PDOException $th){
            echo $th->getMessage();
        }
    }
}