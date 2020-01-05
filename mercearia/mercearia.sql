create database if not exists mercearia
default charset utf8
default collate utf8_general_ci;

use mercearia;

create table funcionario(
	idFunc varchar(30) not null,
	nome varchar(100),
    cargaHorariaMes int,
    valorHora float(4,2),
    valorFixo float(5,2),
    primary key(idFunc)
) default charset = utf8;

create table produto(
	idProd varchar(30) not null,
	nome varchar(100),
    tipo varchar(50),
    precoCompra float(3,2),
    precoVenda float(3,2),
    primary key(idProd)
) default charset = utf8;

create table venda(
	idVenda int not null auto_increment,
    idFunc varchar(30) not null,
	idProd varchar(30) not null,
    quantidade int,
    primary key(idVenda)
) default charset = utf8;

alter table venda
add foreign key(idFunc)
references funcionario(idFunc);

alter table venda
add foreign key(idProd)
references produto(idProd);

insert into funcionario
values('may1', 'maycon silva', 240, 50, 500),
	  ('gio1', 'giovane', 250, 55, 0),
	  ('vin1', 'vinicius', 200, 50, 600),
	  ('nik1', 'nikollas', 230, 50, 500);

insert into produto
values('caf1', 'cafe', 'alimento', 1.5, 2.5),
	  ('arr1', 'arroz', 'alimento', 1.8, 3),
	  ('tom1', 'tomate', 'verdura', 1.65, 3),
	  ('ceb1', 'cebola', 'verdura', 1.25, 2.5),
	  ('vas1', 'vassoura', 'limpeza', 2.8, 4),
	  ('aqu1', 'aqua sanitaria', 'limpeza', 2.3, 3.5),
	  ('cer1', 'cerveja', 'bebida alcolica', 2.5, 4.5),
	  ('bom1', 'bombom garoto', 'doce', 5, 8);

insert into venda(idFunc, idProd, quantidade)
values('may1', 'caf1', 2),
	  ('gio1', 'arr1', 3),
	  ('vin1', 'cer1', 5),
	  ('nik1', 'tom1', 4),
	  ('gio1', 'bom1', 6),
	  ('vin1', 'ceb1', 2),
	  ('nik1', 'vas1', 2),
	  ('may1', 'aqu1', 1),
	  ('may1', 'cer1', 10);
