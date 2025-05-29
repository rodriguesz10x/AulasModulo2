create database aula39;
use aula39;
create table clientes(

id int primary key auto_increment,
nome varchar(50),
cidade varchar(50)

);

create table pedidos(

id int primary key auto_increment,
data_pedido datetime default(current_timestamp()),
valor_compra decimal(10,2),
id_cliente int,
foreign key(id_cliente) references clientes(id)

);