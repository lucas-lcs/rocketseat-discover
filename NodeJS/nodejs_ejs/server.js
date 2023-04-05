const express = require('express')

// Vamos intanciar 
const app = express()

// vamos dizer ao express que vamos usar o js 

app.set('view engine', 'ejs')// a ferramenta que vamos(view engine) será ejs


//criando as rotas de renderização da pagina
app.get('/', function (req, res){
    const items = [
        {
            title: 'D',
            message: 'esenvolvendo aplicação/serviços de forma fácil'
        },

        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },

        {
            title: 'M',
            message: 'uito facil de usar'
        },

        {
            title: 'A',
            message: 'ltamente performatico'
        },

        {
            title: 'I',
            message: 'mersivo'
        },

        {
            title: 'S',
            message: 'im, estou amando'
        }
    ]

        const subtitle = 'Uma linguagem de modelagem para criação de página HTML utilizando JS '

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    })//espera que o index esteja dentro da pasta chamada views
})

app.get('/sobre', function (req, res) {
    res.render('pages/about')
})

//vamos pedir para o servidor rodar
app.listen(8080)
console.log("Rodando!")
