CREATE TABLE departamento (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(150) NOT NULL,
  descripcion varchar(200) DEFAULT NULL
)

CREATE TABLE ciudad (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  descripcion varchar(200) DEFAULT NULL,
  id_dpto int(11) NOT NULL,
  FOREIGN KEY (id_dpto) REFERENCES departamento(id)
)

CREATE TABLE persona (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(150) NOT NULL,
  apellido varchar(150) DEFAULT NULL,
  direccion varchar(200) DEFAULT NULL,
  ci varchar(50) NOT NULL,
  telefono varchar(40) NOT NULL,
  email varchar(150) NOT NULL,
  password text NOT NULL,
  fecha_nacimiento date DEFAULT NULL,
  id_ciudad int(11) DEFAULT NULL,
  FOREIGN KEY (id_ciudad) REFERENCES ciudad(id)
)

CREATE TABLE usuarios (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_persona int(11) NOT NULL,
  rol varchar(80) NOT NULL
)

CREATE TABLE encargado (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_persona int(11) NOT NULL,
  id_usuario int(11) NOT NULL,
  FOREIGN KEY (id_persona) REFERENCES persona(id)
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
)

CREATE TABLE zonas_estrategica (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  longitud double NOT NULL,
  latitud double NOT NULL,
  radio double NOT NULL,
  id_ciudad int(11) NOT NULL,
  FOREIGN KEY (id_ciudad) REFERENCES ciudad(id)
)

CREATE TABLE horarios (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  dia varchar(50) NOT NULL,
  hr_ingreso time NOT NULL,
  hr_salida time NOT NULL,
  id_zona int(11) NOT NULL,
  FOREIGN KEY (id_zona) REFERENCES zonas_estrategica(id)
)

CREATE TABLE ingreso (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_persona int(11) NOT NULL,
  id_zonas int(11) NOT NULL,
  fecha datetime NOT NULL,
  detalles varchar(200) DEFAULT NULL,
  FOREIGN KEY (id_persona) REFERENCES persona(id)
  FOREIGN KEY (id_zona) REFERENCES zonas_estrategica(id)
)

CREATE TABLE llamada_atencion (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_persona int(11) NOT NULL,
  id_usuario int(11) NOT NULL,
  motivo varchar(250) NOT NULL,
  fecha datetime NOT NULL,
  id_ingreso int(11) DEFAULT NULL,
  FOREIGN KEY (id_persona) REFERENCES persona(id)
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
  FOREIGN KEY (id_ingreso) REFERENCES ingreso(id)
)

CREATE TABLE salida (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_ingreso int(11) NOT NULL,
  fecha datetime NOT NULL,
  FOREIGN KEY (id_ingreso) REFERENCES ingreso(id)
)

CREATE TABLE ubicaciones (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_ingreso int(11) NOT NULL,
  fecha datetime NOT NULL,
  longitud double NOT NULL,
  latitud double NOT NULL,
  bateria: float NULL,
  FOREIGN KEY (id_ingreso) REFERENCES ingreso(id)
)

CREATE TABLE solicitud_reportarse (
  id int(11) NOT NULL,
  comentario int(11) DEFAULT NULL,
  fecha datetime NOT NULL,
  id_usuario int(11) NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
) 

CREATE TABLE reportarse (
  id int(11) NOT NULL,
  fecha datetime NOT NULL,
  id_solicitud int(11) NOT NULL,
  id_persona int(11) NOT NULL,
  comentario varchar(250) DEFAULT NULL,
  fotografia text DEFAULT NULL,
  FOREIGN KEY (id_solicitud) REFERENCES solicitud_reportarse(id)
  FOREIGN KEY (id_persona) REFERENCES persona(id)
)