const itens = [];

function onClickAdicionar() {
    adicionarItem();
    renderizarItens();
}

function adicionarItem() {
    const nome = $('#nome').val();
    const valor = $('#valor').val();

    itens.push({
        nome: nome,
        valor: valor
    });
}

function renderizarItens() {
    const $list = document.createElement('ul');
    itens.forEach(item => {
        const $listItem = document.createElement('li');

        $listItem.innerHTML = `<b>Nome</b>: ${item.nome || 'Não informado'}, <b>Valor</b>: ${item.valor || 0}`;

        $list.appendChild($listItem);
    });

    document.getElementById('lista').innerHTML = $list.innerHTML;
}