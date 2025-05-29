create database exercicio;
use exercicio;
create table funcionarios(

id int primary key auto_increment,
nome varchar(100),
cargo varchar(50),
salario decimal(10,2),
data_contratacao date,
ativo boolean
);

create table produtos(

id int primary key auto_increment,
nome varchar(100) not null,
preco decimal(10,2) not null,
estoque int default 0
);

INSERT INTO funcionarios (nome, cargo, salario, data_contratacao, ativo) VALUES
('Ana Beatriz Silva', 'Analista de Sistemas', 5800.00, '2020-03-15', TRUE),
('Carlos Eduardo Mendes', 'Gerente de Projetos', 9500.00, '2018-07-23', TRUE),
('Fernanda Rocha', 'Assistente Administrativo', 3200.00, '2021-01-10', TRUE),
('Lucas Pereira', 'Desenvolvedor Backend', 6300.00, '2019-11-05', TRUE),
('Mariana Lopes', 'Coordenadora de RH', 7200.00, '2017-04-19', TRUE),
('João Victor Almeida', 'Analista de Marketing', 4500.00, '2022-05-12', TRUE),
('Patrícia Gomes', 'Diretora Financeira', 15000.00, '2015-08-30', TRUE),
('Rafael Souza', 'Técnico de Suporte', 2800.00, '2023-02-01', TRUE),
('Juliana Ramos', 'Desenvolvedora Frontend', 6100.00, '2020-10-25', TRUE),
('Tiago Martins', 'Auxiliar de Limpeza', 1900.00, '2021-12-03', TRUE);

INSERT INTO produtos (nome, preco, estoque) VALUES
('Mouse Óptico USB', 45.90, 120),
('Teclado Mecânico', 139.99, 35),
('Monitor 24" LED', 899.00, 12),
('Pen Drive 32GB', 29.50, 200),
('HD Externo 1TB', 320.00, 8),
('Webcam Full HD', 110.00, 0),
('Cabo HDMI 2m', 18.75, 150),
('Notebook i5 8GB RAM', 2899.00, 5),
('Fonte ATX 500W', 230.00, 22),
('Headset Gamer', 159.90, 60);

select * from produtos;
select * from funcionarios;

select nome,cargo,data_contratacao from funcionarios where data_contratacao > '2022-01-01';

select * from funcionarios where cargo = 'analista';

select * from funcionario where salario