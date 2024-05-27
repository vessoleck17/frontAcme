'use strict'

import {getDiretores} from "./diretores.js"

function criarCard(diretor){

    const botao = document.createElement('button')
    botao.id=diretor.id
    botao.onclick=getById
    botao.classList.add('bg-transparent')
    const card = document.createElement('div')



    const capa = document.createElement('img')
    capa.src = diretor.foto
    capa.classList.add('rounded-lg', 'w-full', 'h-full', 'object-cover')

  

    card.append(capa)

    botao.append(capa)

    return botao
}

async function preencherContainer(){

    const container=document.getElementById('lista')
    const diretores = await getDiretores()

    diretores.forEach (diretor=>{
        const card = criarCard(diretor)
        container.appendChild(card)
        console.log(card)
    })
}

async function getById (id){
    const idDiretor = this.id
    localStorage.setItem('idDiretor', idDiretor)
    window.location.href = './infoDiretor.html'
}



preencherContainer()