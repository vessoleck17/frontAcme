'use strict'

import { deleteFilme, getFilmes, postFilme, putFilme } from '../js/filmes.js'
const listaFilmes = await getFilmes()



function criarCard(filme) {
    const container = document.querySelector('tbody')

    console.log(filme);

    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700')

    const id = document.createElement('th')
    id.textContent = filme.id

    const capa = document.createElement('img')
    capa.src = filme.foto_capa

    const foto = document.createElement('td')
    foto.src = capa

    const titulo = document.createElement('td')
    titulo.textContent = filme.nome

    const sinopse = document.createElement('td')
    sinopse.textContent = filme.sinopse

    const duracao = document.createElement('td')
    duracao.textContent = filme.duracao

    const lancamento = document.createElement('td')
    const data_lancamento_exemplo = filme.data_lancamento
    lancamento.textContent = data_lancamento_exemplo.substring(0, 10)

    const relancamento = document.createElement('td')
    if (filme.data_relancamento == null)
        relancamento.textContent = 'Sem Relançamento'
    else {
        const relancamento_exemplo = filme.data_relancamento
        relancamento.textContent = relancamento_exemplo.substring(0, 10)
    }

    // const genero = document.createElement('td')
    // genero.textContent = filme.genero

    const classificacao = document.createElement('img')
    classificacao.src = filme.classificacao[0].icon
    classificacao.classList.add('w-1/2')

    const valor = document.createElement('td')
    valor.textContent = filme.valor_unitario

    const excluir = document.createElement('td')

    const excluirImg = document.createElement('i')
    excluirImg.classList.add('bx', 'bx-trash', 'text-2xl', 'text-[#FF0000]')
    excluir.append(excluirImg)


    excluirImg.addEventListener('click', () => {
        deleteFilme(filme.id)
        window.location.reload()
    })

    const editar = document.createElement('td')
    const editarImg = document.createElement('i')
    editarImg.classList.add('bx', 'bxs-edit-alt', 'text-2xl')
    editar.append(editarImg)

    editarImg.addEventListener('click', () => {
        document.getElementById('modal-put').classList.add('active')
        document.getElementById('updateTitulo').value = filme.nome
        document.getElementById('updateCapa').value = filme.foto_capa
        document.getElementById('updateSinopse').value = filme.sinopse
        document.getElementById('updateDuracao').value = filme.duracao
        document.getElementById('updateLancamento').value = filme.data_lancamento
        document.getElementById('updateRelancamento').value = filme.data_relancamento
        document.getElementById('updateValor').value = filme.valor_unitario
        document.getElementById('updateClassificacao').value = filme.id_classificacao

        localStorage.setItem('idEditarFilme', filme.id)
    })

    tr.appendChild(id)
    tr.appendChild(capa)
    tr.appendChild(titulo)
    tr.appendChild(sinopse)
    tr.appendChild(duracao)
    tr.appendChild(lancamento)
    tr.appendChild(relancamento)
    tr.appendChild(classificacao)
    tr.appendChild(valor)
    tr.appendChild(editar)

    tr.appendChild(excluir)


    container.appendChild(tr)

    
    

}

const openModal = () => {
    document.getElementById('modal').classList.add('active')

}


const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const closeModal2 = () => document.getElementById('modal-put')
    .classList.remove('active')








const salvarAlteracao = async (filme, id) => {
    const fotoCapaInput = document.getElementById('updateCapa').value
    const nomeInput = document.getElementById('updateTitulo').value
    const sinopseInput = document.getElementById('updateSinopse').value
    const duracaoInput = document.getElementById('updateDuracao').value
    const dataLancamentoInput = document.getElementById('updateLancamento').value
    const dataRelancamentoInput = document.getElementById('updateRelancamento').value
    const idClassificacaoInput = document.getElementById('updateClassificacao').value
    const valorUnitarioInput = document.getElementById('updateValor').value


    const alteracoes = {
        foto_capa: fotoCapaInput,
        nome: nomeInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        id_classificacao: idClassificacaoInput,
        valor_unitario: valorUnitarioInput
    }

    console.log(alteracoes);

    await putFilme(alteracoes, localStorage.getItem('idEditarFilme'))


    closeModal2()
    window.location.reload()
}





const salvarFilme = async () => {

    const fotoCapa = document.getElementById('filmeCapa')
    console.log(fotoCapa.value);

    const filme = {
        foto_capa: document.getElementById('filmeCapa').value,
        nome: document.getElementById('filmeTitulo').value,
        sinopse: document.getElementById('filmeSinopse').value,
        duracao: document.getElementById('filmeDuracao').value,
        data_lancamento: document.getElementById('filmeLancamento').value,
        data_relancamento: document.getElementById('filmeRelancamento').value,
        id_classificacao: document.getElementById('filmeClassificacao').value,
        valor_unitario: document.getElementById('filmeValor').value
    }

    console.log(filme);


    await postFilme(filme);

    closeModal();
    window.location.reload()



}

document.getElementById('btn-cadastro')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('modalClose2')
    .addEventListener('click', closeModal2)

document.getElementById('btn-salvar')
    .addEventListener('click', salvarFilme)

document.getElementById('btn-salvar-alteracao')
    .addEventListener('click', salvarAlteracao)





listaFilmes.forEach(filme => {
    criarCard(filme)
})



















