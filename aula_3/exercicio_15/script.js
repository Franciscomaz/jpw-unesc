class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }

    toString() {
        return `Nome: ${this.nome}, Valor: ${this.valor} `
    }
}

class Gerador {

    constructor () {
        this._lista = [];
    }

    gerarHtml() {
        return document.createElement('div');
    }

    setLista(lista) {
        this._lista = lista;
    }
}

class GeradorLista extends Gerador {
    gerarHtml() {
        if (!this._lista || !this._lista.length) {
            return super.gerarHtml();
        }

        const $ul = document.createElement('ul');
        $ul.innerHTML = this._lista.reduce((html, produto) => html.concat(`<li>${produto.toString()}</li>`), '');
        return $ul; 
    }
}

const lista = [
    new Produto("Chocolate", 5.00),
    new Produto("Camiseta", 30.00),
];

function gerarLista() {
    const gerador = new GeradorLista();
    gerador.setLista(lista);

    const $listElement = document.getElementById('content');
    $listElement.appendChild(gerador.gerarHtml());
} 

