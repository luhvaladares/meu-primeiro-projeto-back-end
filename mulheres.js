const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [ 
    {
        nome: "Simaria Coceição",
        imagem: "",
        minibio: "Desenvolvedora e Instrutora"
    },
    {
        nome: "Iana Chan",
        imagem: "",
        minibio: "Fundadora da PrograMaria"
    },
    {
        nome: "Nina da Hora",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Hacker antirracista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)
