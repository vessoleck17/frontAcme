
export async function getAtores(){

    let url = 'http://localhost:8080/v2/ACME_FILMES/ator'
    const response = await fetch(url)
    const data = await response.json()

    return data.ator
}


export async function getAtorByID(id){
    let url=`http://localhost:8080/v2/ACME_FILMES/ator/${id}`
    const response=await fetch(url)
    const data=await response.json()
    console.table(data.ator[0])
    return data.ator[0]
}



export async function postAtor(ator){
    const url = 'http://localhost:8080/v2/acme_filmes/ator'
    //JSON
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        // Transformar o filme em uma string para mandar pro servidor
        body: JSON.stringify(ator)
    }
    const response =  await fetch(url, options)
    return response.ok
}

export async function putAtor(ator, id){
    const url= `http://localhost:8080/v2/ACME_FILMES/updateAtor/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function deleteAtor(id){
    const url=`http://localhost:8080/v2/ACME_FILMES/deleteAtor/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}



