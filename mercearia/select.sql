select * from funcionario;
select * from produto;
select * from venda;

select funcionario.nome as funcionario, venda.quantidade, produto.nome as produto 
	from funcionario join produto join venda
    on funcionario.idFunc = venda.idFunc and produto.idProd = venda.idProd
    order by funcionario, quantidade; 
    
select funcionario.nome as funcionario, sum(venda.quantidade) as quantidade, sum(produto.precoVenda * quantidade) as total
	from funcionario join produto join venda
    on funcionario.idFunc = venda.idFunc and produto.idProd = venda.idProd
    group by funcionario
    order by quantidade;