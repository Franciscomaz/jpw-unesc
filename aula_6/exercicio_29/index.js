const request = require('request');

const search = process.argv[2];

request(`http://dicionario-aberto.net/search-json/${search}`, (err, resposta) => {
    if (err) {
        console.log('Ocorreu um erro: ', err);
        return;
    }

    const {form, sense} = JSON.parse(resposta.body).entry;

    const wordInformation = {
        name: form.orth,
        definition: sense.map(el => el.def).join('\n'),
    };

    console.log(wordInformation);
});
