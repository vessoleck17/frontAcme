'use strict'

import {getFilmes} from "./filmes.js"

function criarCard(filme){

    const botao = document.createElement('button')
    botao.id=filme.id
    botao.onclick=getById
    botao.classList.add('bg-transparent')
    const card = document.createElement('div')


    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('rounded-lg')

    const texto = document.createElement('p')
    texto.textContent = filme.sinopse

    card.append(capa)

    botao.append(capa)

    return botao
}

async function preencherContainer(){

    const container=document.getElementById('lista')
    const filmes = await getFilmes()

    filmes.forEach (filme=>{
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

async function getById (id){
    const idfilme = this.id
    localStorage.setItem('idFilme', idfilme)
    window.location.href = './infoFilme.html'
}



preencherContainer()