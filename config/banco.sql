create database jogos;
use jogos;

create table game(
    id int auto_increment primary key,
    nome varchar(100),
    tipo varchar(100),
    ano varchar(100)
);
insert into game (nome, tipo, ano) values
('The Legend of Zelda: Breath of the Wild', 'Aventura', '2017'),
('God of War', 'Ação', '2018'),
('Super Mario Odyssey', 'Plataforma', '2017'),
('The Witcher 3: Wild Hunt', 'RPG', '2015'),
('Minecraft', 'Sandbox', '2011');
