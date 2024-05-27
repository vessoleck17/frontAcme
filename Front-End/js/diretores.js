
export async function getDiretores(){

    let url = 'http://localhost:8080/v2/ACME_FILMES/diretor'
    const response = await fetch(url)
    const data = await response.json()

    return data.diretor
}


export async function getDiretorByID(id){
    let url=`http://localhost:8080/v2/ACME_FILMES/diretor/${id}`
    const response=await fetch(url)
    const data=await response.json()
    console.table(data.diretor[0])
    return data.diretor[0]
}



export async function postDiretor(diretor){
    const url = 'http://localhost:8080/v2/acme_filmes/diretor'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(diretor)
    }
    const response =  await fetch(url, options)
    return response.ok
}

export async function putDiretor(diretor, id){
    const url= `http://localhost:8080/v2/ACME_FILMES/updateDiretor/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function deleteDiretor(id){
    const url=`http://localhost:8080/v2/ACME_FILMES/deleteDiretor/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}



