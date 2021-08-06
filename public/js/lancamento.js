const lancamento = async()=>{

    let textoFilme = 'Game of thrones'
   

    const url = 'https://www.omdbapi.com/?apikey=cebbc5f7&t=' + textoFilme
    const dados = await fetch(url)  
    const catalogo =  await dados.json()     
   
    const pegarImage = await catalogo.Poster 
    const pegaTitulo = await catalogo.Title
    const pegarPlot = await catalogo.Plot


    document.getElementById('lancamentos').innerHTML = `<img src="${pegarImage}" style="width:200px"> `
    document.getElementById('titulo').innerHTML = `<h1>${pegaTitulo}</h1><br>`
    document.getElementById('descricaos').innerHTML=`<h2>${pegarPlot}</h2><br>`
   
}

lancamento()


