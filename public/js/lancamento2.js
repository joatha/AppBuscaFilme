const lancamento2 = async()=>{
    
let textoFilme2 = 'Breaking bad'
 
const url = 'https://www.omdbapi.com/?apikey=cebbc5f7&t=' + textoFilme2
const dados2 = await fetch(url)  
const catalogo2 =  await dados2.json()     

const pegarImage2 = await catalogo2.Poster 
const pegaTitulo2 = await catalogo2.Title
const pegarPlot2 = await catalogo2.Plot


document.getElementById('lancamentos2').innerHTML = `<img src="${pegarImage2}" style="width:200px"> `
document.getElementById('titulo2').innerHTML = `<h1>${pegaTitulo2}</h1><br>`
document.getElementById('descricaos2').innerHTML=`<h2>${pegarPlot2}</h2><br>`

}

lancamento2()