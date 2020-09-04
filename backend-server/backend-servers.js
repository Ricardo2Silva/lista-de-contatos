let listaContatos = [
  {
    id: 0,
    nome: 'Ricardo Jonas da Silva',
    tipo: 'email',
    valor: 'ricardojonasdasilva60@gmail.com'
  },
  {

    id: 1,
    nome: 'Josias Jonas da Silva',
    tipo: 'telefone comercial',
    valor: '25283158'

  },
  {
    id: 2,
    nome: 'Jose Jonas da Silva',
    tipo: 'telefone residencial',
    valor: '26384398'

  },
  {
    id: 3,
    nome: 'Joao Jonas da Silva',
    tipo: 'celular',
    valor: '982716971'
  },
  {

    id: 4,
    nome: 'Roberto Jonas da Silva',
    tipo: 'email',
    valor: 'ricardojonasdasilva60@gmail.com'

  }
]

const express = require("express");
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", '*');
  res.header("Access-Control-Allow-Methods", '*');
  next();
})

app.get("/contatos", (req, res) => {
  res.status(200).json(listaContatos);
});

app.get("/contatos/:id", (req, res) => {
  const id = req.params.id;
  const contato = listaContatos.find(item => item.id == id);
  res.status(200).json(contato);

})


app.post("/contatos", (req, res) => {
  const contato = req.body;
  contato.id = listaContatos.length;
  listaContatos.push(contato);
  res.status(201).json(listaContatos)

})

app.delete("/contatos/:id", (req, res) => {
  const id = req.params.id;
  listaContatos = listaContatos.filter(item => item.id != id);
  res.status(200).json('item deletado com sucesso');
})

app.put("/contatos/editar", (req, res) => {

  const contatoUpdate = req.body;

  let contato = listaContatos.find(item => item.id == contatoUpdate.id);

  if (!!contato) {
    contato.nome = contatoUpdate.nome;
    contato.tipo = contatoUpdate.tipo;
    contato.valor = contatoUpdate.valor;
  }
  res.status(200).json('item atualizado com sucesso');
})

app.get("/contatos/nome/:valor", (req, res) => {
  const nome = req.params.valor;
  const contatosFiltro = listaContatos.filter(item => item.nome.toLowerCase().indexOf(nome.toLowerCase()) > -1);
  res.status(200).json(contatosFiltro);
})

app.get("/contatos/tipo/:valor", (req, res) => {
  const tipo = req.params.valor;
  const contatoFiltroTipo = listaContatos.filter(item => item.tipo == tipo);
  res.status(200).json(contatoFiltroTipo);
})

app.get("/contatos/valor/:valor", (req, res) => {
  const valor = req.params.valor;
  const contatoFiltroValor = listaContatos.filter(item => item.valor.toLowerCase().indexOf(valor.toLowerCase()) > -1)
  res.status(200).json(contatoFiltroValor);
})


app.listen(3030, () => {
  console.log('servidor funcionando');
});

