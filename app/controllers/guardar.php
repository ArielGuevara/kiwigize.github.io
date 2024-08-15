<?php
require_once "../models/persona.model.php";
$arrayName = array(
    'nombre' => $_POST['nombre'],
    'email' => $_POST['email'],
    'contrasenia' => $_POST['contrasenia']
);

echo json_encode(Persona::guardarDatos($arrayName));