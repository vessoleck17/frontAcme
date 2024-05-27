'use strict';

import { getAtorByID } from "./atores.js";

const id = localStorage.getItem('idAtor');

async function infoAtor(idAtor) {
  
        const ator = await getAtorByID(idAtor);

            const nome = document.getElementById('nome');
            nome.textContent = ator.nome;

            const foto = document.getElementById('foto');
            foto.src = ator.foto;
            foto.classList.add('w-80'); 

            const biografia = document.getElementById('biografia');
            biografia.textContent = ator.biografia;


            const nascimento = document.getElementById('nascimento');
            nascimento.textContent = `Nascimento: ${ator.data_nascimento.substring(0, 10)}`
       
}

infoAtor(id);
