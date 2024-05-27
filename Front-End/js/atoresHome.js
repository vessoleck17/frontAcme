'use strict'

import {getAtores} from "./atores.js"

function criarCard(ator){

    const botao = document.createElement('button')
    botao.id=ator.id
    botao.onclick=getById
    botao.classList.add('bg-transparent')
    const card = document.createElement('div')



    const capa = document.createElement('img')
    capa.src = ator.foto
    capa.classList.add('rounded-lg', 'w-full', 'h-full', 'object-cover')


  

    card.append(capa)

    botao.append(capa)

    return botao
}

async function preencherContainer(){

    const container=document.getElementById('lista')
    const atores = await getAtores()

    atores.forEach (ator=>{
        const card = criarCard(ator)
        container.appendChild(card)
        console.log(card)
    })
}

async function getById (id){
    const idAtor = this.id
    localStorage.setItem('idAtor', idAtor)
    window.location.href = './infoAtor.html'
}





preencherContainer()