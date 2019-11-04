const EMPTY_LABEL = 'Não informado';
const DEFAULT_IMAGE_PLACEHOLDER = 'https://temp.media/?height=400&width=500&text=_&category=&color=';

const filmesOuJogos = [];

let editedId = null;

function onClickSalvar() {
    if (!editedId && editedId !== 0) {
        adicionarFilmeOuJogo();
    } else {
        editarFilmeOuJogo(editedId);
    }

    renderizarFilmesOuJogos();
}

function onClickEditar(id) {
    const filmeOuJogo = filmesOuJogos[id];

    if (!filmeOuJogo) {
        return;
    }

    editedId = id;

    $('#nome').val(filmeOuJogo.nome);
    $('#estilo').val(filmeOuJogo.estilo);
    $('#url').val(filmeOuJogo.url);
}

function adicionarFilmeOuJogo() {
    const nome = $('#nome').val();
    const estilo = $('#estilo').val();
    const url = $('#url').val();

    filmesOuJogos.push({
        nome: nome,
        estilo: estilo,
        url: url
    });
}

function editarFilmeOuJogo(id) {
    const nome = $('#nome').val();
    const estilo = $('#estilo').val();
    const url = $('#url').val();

    const filmeOuJogo = filmesOuJogos[id];

    editedId = null;

    if (!filmeOuJogo) {
        return;
    }

    filmeOuJogo.nome = nome;
    filmeOuJogo.estilo = estilo;
    filmeOuJogo.url = url;
}

function removerFilmeOuJogo(id) {
    filmesOuJogos.splice(id, 1);
    $('#' + id).remove();
}

function renderizarFilmesOuJogos() {
    const $list = document.getElementById('cards');
    $list.innerHTML = '';
    filmesOuJogos.forEach((filmeOuJogo, index) => {
        $list.innerHTML += `<div id="${index}" class="col-4">
            <div class="card m-1">
                <img src="${filmeOuJogo.url || DEFAULT_IMAGE_PLACEHOLDER}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text"><b>Nome</b>: ${filmeOuJogo.nome || EMPTY_LABEL}</p>
                    <p class="card-text"><b>Estilo</b>: ${filmeOuJogo.estilo || EMPTY_LABEL}</p>
                </div>
                <div class="card-body">
                    <button class="btn btn-primary" onclick="onClickEditar(${index})">Editar</button>
                    <button class="btn btn-danger" onclick="removerFilmeOuJogo(${index})">Remover</button>
                </div>
            </div>
        </div>`;
    });
}