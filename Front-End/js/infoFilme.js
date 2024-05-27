'use strict';

import { getFilmeByID } from "./filmes.js";

const id = localStorage.getItem('idFilme');

async function infoFilme(idFilme) {
  
        const filme = await getFilmeByID(idFilme);

            const titulo = document.getElementById('titulo');
            titulo.textContent = filme.nome;

            const capa = document.getElementById('capa');
            capa.src = filme.foto_capa;
            capa.classList.add('w-80'); 

            const sinopse = document.getElementById('sinopse');
            sinopse.textContent = filme.sinopse;

            const duracao = document.getElementById('duracao');
            duracao.textContent=`Duração: ${filme.duracao.substring(11, 19)}`

            const lancamento = document.getElementById('lancamento');
            lancamento.textContent = `Lançamento: ${filme.data_lancamento.substring(0, 10)}`;

            const valor = document.getElementById('valor');
            valor.textContent = `Por apenas R$ ${filme.valor_unitario},00`;
       
}

infoFilme(id);
