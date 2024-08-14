CREATE TABLE persona(
    id serial NOT NULL,
    nombre character varying(25) NOT NULL,
    email character varying(100) NOT NULL,
    contrasenia  character varying(100) NOT NULL,
    PRIMARY KEY (id)
);