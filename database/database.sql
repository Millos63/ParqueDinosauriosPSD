create table aperturasCajas
(
folio INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
-->idEmpleado
idElaboradoPor INT NOT NULL,
--idEmpleado
idAprobadoPor INT NOT NULL,
--idCaja
idCaja INT NOT NULL,
fechaApertura DATETIME NOT NULL,
montoApertura DECIMAL(6,2) NOT NULL,
-->idEmpleado
idCajero INT NOT NULL,
turno VARCHAR(20),
observaciones VARCHAR (30) NOT NULL,
FOREIGN KEY (idElaboradoPor) REFERENCES empleados(idEmpleado),
FOREIGN KEY (idAprobadoPor) REFERENCES empleados(idEmpleado),
FOREIGN KEY (idCaja) REFERENCES cajas(idCaja),
FOREIGN KEY (idCajero) REFERENCES empleados(idEmpleado)
);


create table cierresCajas
(
folio INT(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
-->idEmpleado
idElaboradoPor INT NOT NULL,
--idEmpleado
idAprobadoPor INT NOT NULL,
idCaja INT NOT NULL,
fechaCierre DATETIME NOT NULL,
corteDeCaja DECIMAL(6,2) NOT NULL,
-->idEmpleado
idCajero INT NOT NULL,
turno VARCHAR(20),
observaciones VARCHAR (30) NOT NULL,
FOREIGN KEY (idElaboradoPor) REFERENCES empleados(idEmpleado),
FOREIGN KEY (idAprobadoPor) REFERENCES empleados(idEmpleado),
FOREIGN KEY (idCaja) REFERENCES cajas(idCaja),
FOREIGN KEY (idCajero) REFERENCES empleados(idEmpleado)
);