const lancamento3 = async()=>{
    
    let textoFilme3 = 'avengers endgame'
     
    const url = 'https://www.omdbapi.com/?apikey=cebbc5f7&t=' + textoFilme3
    const dados3 = await fetch(url)  
    const catalogo3 =  await dados3.json()     
    
    const pegarImage3 = await catalogo3.Poster 
    const pegaTitulo3 = await catalogo3.Title
    const pegarPlot3 = await catalogo3.Plot
    
    
    document.getElementById('lancamentos3').innerHTML = `<img src="${pegarImage3}" style="width:200px"> `
    document.getElementById('titulo3').innerHTML = `<h1>${pegaTitulo3}</h1><br>`
    document.getElementById('descricaos3').innerHTML=`<h2>${pegarPlot3}</h2><br>`
    
    }
    
    lancamento3()