create database dripstore;
use dripstore;
create table clientes (

id int primary key auto_increment,
nome varchar (50) not null,
descricao text,
email varchar (100) not null unique,
telefone varchar (14),
data_nascimento date,
genero char (1),
data_cadastro datetime default(current_timestamp())
);

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT DEFAULT 0,
    categoria VARCHAR(50),
    ativo BOOLEAN DEFAULT TRUE
);

INSERT INTO produtos (nome, descricao, preco, estoque, categoria, ativo) VALUES
('Camiseta Básica', 'Camiseta 100% algodão, confortável e resistente', 29.90, 100, 'Roupas', TRUE),
('Calça Jeans', 'Calça jeans azul escuro, corte reto', 99.90, 50, 'Roupas', TRUE),
('Tênis Esportivo', 'Tênis para corrida com amortecimento', 199.90, 30, 'Calçados', TRUE),
('Relógio Digital', 'Relógio à prova d\'água com múltiplas funções', 150.00, 20, 'Acessórios', TRUE),
('Mochila Escolar', 'Mochila resistente com vários compartimentos', 120.00, 45, 'Bolsas', TRUE),
('Smartphone X', 'Smartphone com tela 6.5", 128GB', 1500.00, 15, 'Eletrônicos', TRUE),
('Fone de Ouvido', 'Fone bluetooth com cancelamento de ruído', 250.00, 40, 'Eletrônicos', TRUE),
('Livro: Aprendendo SQL', 'Livro completo para iniciantes em SQL', 75.00, 100, 'Livros', TRUE),
('Cafeteira Elétrica', 'Cafeteira com timer e capacidade para 12 xícaras', 300.00, 25, 'Eletrodomésticos', TRUE),
('Monitor LED 24"', 'Monitor Full HD para escritório e games', 850.00, 18, 'Eletrônicos', TRUE),
('Teclado Mecânico', 'Teclado RGB com switches azuis', 400.00, 60, 'Informática', TRUE),
('Mouse Gamer', 'Mouse ergonômico com DPI ajustável', 180.00, 70, 'Informática', TRUE),
('Geladeira Duplex', 'Geladeira com freezer duplex, 400L', 2200.00, 10, 'Eletrodomésticos', TRUE),
('Cadeira Gamer', 'Cadeira ergonômica com apoio de braço ajustável', 950.00, 12, 'Móveis', TRUE),
('Mesa de Escritório', 'Mesa com tampo em vidro e suporte metálico', 500.00, 20, 'Móveis', TRUE),
('Óculos de Sol', 'Óculos UV400 com design moderno', 120.00, 80, 'Acessórios', TRUE),
('Bicicleta Mountain Bike', 'Bicicleta com 21 marchas para trilhas', 1800.00, 8, 'Esportes', TRUE),
('Câmera Digital', 'Câmera compacta 20MP com zoom óptico 10x', 600.00, 16, 'Eletrônicos', TRUE),
('Livro: Python para Data Science', 'Manual avançado para análise de dados em Python', 90.00, 70, 'Livros', TRUE),
('Caixa de Som Bluetooth', 'Caixa portátil com som estéreo e bateria longa', 220.00, 35, 'Eletrônicos', TRUE);

-- CREATE, READ, UPDATE, DELETE
-- CREATE
insert into clientes (nome,email,telefone,data_nascimento,genero) values
('Ana','ana@email.com','98989898987','2020-04-05','F');

insert into clientes (nome,email,telefone,data_nascimento,genero) values
('Pedro','pedro@email.com','98989898559','2018-06-22','M');

INSERT INTO clientes (nome, email, telefone, data_nascimento, genero) VALUES
('Bruno','bruno@email.com','98989898881','1992-06-15','M'),
('Carla','carla@email.com','98989898882','1985-03-22','F'),
('Daniel','daniel@email.com','98989898883','1990-09-10','M'),
('Eduarda','eduarda@email.com','98989898884','1988-11-05','F'),
('Felipe','felipe@email.com','98989898885','1995-01-30','M'),
('Giovana','giovana@email.com','98989898886','2000-07-14','F'),
('Henrique','henrique@email.com','98989898887','1998-12-25','M'),
('Isabela','isabela@email.com','98989898888','1993-04-09','F'),
('João','joao@email.com','98989898889','1989-08-17','M'),
('Karla','karla@email.com','98989898890','1991-05-23','F'),
('Leonardo','leonardo@email.com','98989898891','1994-10-12','M'),
('Marina','marina@email.com','98989898892','1987-06-03','F'),
('Nicolas','nicolas@email.com','98989898893','1996-02-20','M'),
('Olívia','olivia@email.com','98989898894','1999-03-11','F'),
('Paulo','paulo@email.com','98989898895','1986-07-27','M'),
('Renata','renata@email.com','98989898896','1997-09-08','F'),
('Samuel','samuel@email.com','98989898897','1993-12-19','M'),
('Tatiane','tatiane@email.com','98989898898','1990-11-30','F'),
('Vinícius','vinicius@email.com','98989898899','1991-01-01','M'),
('Yasmin','yasmin@email.com','98989898900','1998-05-16','F');

-- READ
select * from clientes;
select nome,email from clientes;
select * from clientes where genero = 'M';

-- UPDATE
update clientes set email = '' where id = 15;
update clientes set nome = 'Rodriguesz';

-- DELETE
delete from clientes where id = '10';

-- SELECTs
select * from clientes;
select * from produtos;

-- Where por igualdade
select * from produtos where categoria = 'Roupas';
select * from clientes where genero = 'M';
select * from clientes where genero = 'F';

-- Where por like
select nome, preco,descricao from produtos where descricao like 'Tri%';
select nome, preco,descricao from produtos where nome like '%l';
select nome, preco,descricao from produtos where descricao like '%com%';

-- Where por faixa de datas
select * from clientes;
select * from produtos;

select nome, telefone,data_cadastro from
clientes where data_nascimento > '1995-01-01';

select nome, telefone,data_cadastro,data_nascimento from
clientes where year(data_nascimento) > '1995';

select nome, telefone,data_cadastro from
clientes where data_nascimento between '1995-01-01' and '2000-01-01';

-- Where por comparação numérica
select * from clientes;
select * from produtos;

select nome, preco from produtos where preco < 500;
select nome, preco from produtos where preco between 1000 and 2000;

-- Where por in e not in
select * from produtos where categoria in ('Roupas','Livros');
select * from produtos where categoria not in ('Roupas','Livros');

-- Where por is null ou is not null
select * from produtos where categoria is null;
select * from produtos where categoria is not null;

-- Where por operadores lógicos
select * from produtos where categoria = 'roupas' and preco <= 100;
select * from produtos where categoria = 'roupas' and preco >= 100;

select * from produtos where categoria = 'eletronicos' or preco > 1000;

select * from produtos where not ativo;