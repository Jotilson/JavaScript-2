
const lista=document.getElementById("lista")
const botao=document.getElementById("btn")
lista.innerHTML="Nenhum dado disponível"
botao.addEventListener("click",function(){
    async function buscarUs() {
    try {
        lista.innerHTML="Carregando Dados..."
        await new Promise(r=> setTimeout(r,500));

          const response=await
           fetch("https://jsonplaceholder.typicode.com/users")
     if(!response.ok){throw new Error("Erro de requisição")}
    const dados= await response.json()
console.log(dados)
lista.innerHTML="<h3>Usuários</h3>"
    dados.forEach(user => {
       
        lista.innerHTML+=`<p>Nome: ${user.name} | Email: ${user.email} | Cidade: ${user.address.city}</p>`
    });
    const response2=await fetch("https://jsonplaceholder.typicode.com/posts")
    const dado=await response2.json()
    console.log(dado)
     lista.innerHTML+="<h3>Posts</h3>"
    dado.forEach(tit=>{
       
        lista.innerHTML+=`<p>Título: ${tit.title} | Body: ${tit.body}</p>`
    })
        
    } catch (error) {
        alert("Erro na URL da API")
    }
  
}
 buscarUs()


})
