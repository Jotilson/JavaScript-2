
const lista=document.createElement("div")
lista.id='lista'
document.body.appendChild(lista)

async function criarPost() {
   
    lista.innerHTML="Carregando os dados..."
    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{

        method:"GET",
        headers:{ "Content-Type":"application/json"},
       
    });
    const resultado= await response.json()
    console.log(resultado)
     lista.innerHTML=""
     resultado.forEach(tit => {
           lista.innerHTML+=`<p>Título: ${tit.title}</p>`
     });
     
   
}
criarPost();