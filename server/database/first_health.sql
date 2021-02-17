SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,STRICT_ALL_TABLES';
create database first_health;

use first_health;
create table customers (
id int NOT NULL AUTO_INCREMENT,
nama varchar(100) NOT NULL,
umur int NOT NULL,
jenis_kelamin varchar(20) NOT NULL,
alamat varchar(100) NOT NULL,
no_hp varchar(15) NOT NULL,
suhu decimal NOT NULL,
jenis_sample varchar(100) NOT NULL,
primary key(id)
);
create table test_result (
id int NOT NULL AUTO_INCREMENT,
hasil enum('Positif', 'Negatif'),
tanggal date,
nilai_rujukan varchar(100) NOT NULL,
jenis_pemeriksaan varchar(100) NOT NULL,
keterangan varchar(255) NOT NULL,
id_customer int,
PRIMARY KEY (id),
FOREIGN KEY (id_customer) REFERENCES customers(id)
);

