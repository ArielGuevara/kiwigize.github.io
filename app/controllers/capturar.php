<?php
require_once "../models/persona.model.php";
echo json_encode(Persona::obtenerDatosUsers($_POST['user'], $_POST['password']));