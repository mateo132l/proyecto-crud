CREATE DATABASE clientesdb;

USE clientesdb;

CREATE TABLE clientes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    apellido VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(45) DEFAULT NULL,
    cedula  VARCHAR(45) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE clientes;

INSERT INTO clientes VALUES
    (1, 'joe', 'perez', 1111111111, 1007914502, 'ejemplo@ejemplo.com');

{
  "nombre": "Pepa",
  "apellido": "Pig",
  "telefono": 1111111111,
  "cedula": 1007914502,
  "email": "ejemplo@ejemplo.com"
}