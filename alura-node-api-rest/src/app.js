import express from "express";

const app = express();

//
// USANDO PARA CONVERTER OS DADOS DAS REQUISICOES EM JSON
//
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]

function buscaLivro(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  })
}

//
// ROTAS GET
//
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
})

//
// ROTAS POST
//
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso: " + req.body);
});

//
// ROTAS PUT
//
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

//
// ROTAS DELETE
//
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

export default app;