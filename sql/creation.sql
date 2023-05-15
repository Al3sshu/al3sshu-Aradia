--Crear una tabla para los usuarios para que puedan ingresar 

DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT, 
    birthdate DATE
);
--tabla para las subcripciones para la revista 
DROP TABLE IF EXISTS subscribe;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS subscribe (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT, 
    address TEXT,
    postalcode TEXT,
    country TEXT, 
    pay TEXT, 
    subscriptiondate DATE 
);

--Tabla para solo para noticias enviado al correo, para el usuario
DROP TABLE IF EXISTS notice;

CREATE TABLE IF NOT EXISTS notice (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
    username TEXT,
    email TEXT, 
    age DATE

);