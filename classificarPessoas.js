const assert = require('assert');

describe('classificarPessoas', function()  {
  it('deve retornar a quantidade correta de pessoas na lista', function() {
    const listaPessoas = [
      { nome: 'João', idade: 0, email: 'joao@mentoria1.com' },
      { nome: "Adriana", idade: 15, email: "adriana@mentoria1.com" },
      { nome: "Claudinei", idade: 20, email: "claudinei@mentoria1.com" },
      { nome: "Nique", idade: 20, email: "nique@mentoria1.com" },
      { nome: "Eduardo", idade: 5, email: "eduardo@mentoria1.com" },
      { nome: "Leda", idade: 18, email: "leda@mentoria1.com" },
      { nome: "Andrea", idade: 12, email: "andrea@mentoria1.com" },
      { nome: "Gabriel", idade: 9, email: "gabriel@mentoria1.com" },
      { nome: "Laura", idade: 17, email: "laura@mentoria1.com" },
    ];

    function classificarPessoas(listaPessoas) {
      for (let i = 0; i < listaPessoas.length; i++) {
        const listaPessoa = listaPessoas[i];
        let classificacao = "";

        if (listaPessoa.idade <= 0){
           classificacao = "Idade não Permitida!!!";
        } else if (listaPessoa.idade < 12){
          classificacao = "Criança";
        } else if (listaPessoa.idade >= 12 && listaPessoa.idade <= 17) {
          classificacao = "Adolescente";
        } else {
          classificacao = "Adulto";
        }
         console.log(`Nome: ${listaPessoa.nome}, Idade: ${listaPessoa.idade}, Email: ${listaPessoa.email}, ${classificacao}`);
      }

      return listaPessoas.length;
    }

    const numeroPessoas = classificarPessoas(listaPessoas);
    assert.strictEqual(numeroPessoas, listaPessoas.length);
    console.log('Quantidade de itens na lista: ', numeroPessoas);
  });
});
