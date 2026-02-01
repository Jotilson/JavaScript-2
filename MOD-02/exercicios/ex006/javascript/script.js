
const form=document.getElementById("form")
const botao= document.getElementById("btnMostrar")
const btnEnviar=document.getElementById("btnEnviar")

const nme=document.getElementById("nombre")

const sobreN=document.getElementById("username")
const tell=document.getElementById("phone")
const web=document.getElementById("site")
const txtnome=document.getElementById("saida")
const txtsobreN=document.getElementById("saida2")
const txtPhone=document.getElementById("saida3")
const txtWeb=document.getElementById("saida4")

const apiKey="d2d62f7975863098cbd673c8d4c6639b";

 nme.addEventListener("input",function(){
    if((nme.value).length<5){
   txtnome.textContent="O seu nome deve conter mais de 5 letras"
   txtnome.style.color="red"
   txtnome.style.fontFamily="monospace"
  
    }else{
    txtnome.textContent="Certo!"
    txtnome.style.color="green"
 
    }       
    })

  sobreN.addEventListener("input",function(){
    if((sobreN.value).length<5){
   txtsobreN.textContent="O seu sobrenome deve conter mais de 5 letras"
   txtsobreN.style.color="red"
   txtsobreN.style.fontFamily="monospace"
  
    }else{
    txtsobreN.textContent="Certo!"
    txtsobreN.style.color="green"
    }
  
  }) 

  tell.addEventListener("input",function(){
    
    tell.value=tell.value.replace(/\D/g,"")
    
     if((tell.value.toString()).length<8){
   txtPhone.textContent="O seu número deve conter mais de 7 digitos"
   txtPhone.style.color="red"
   txtPhone.style.fontFamily="monospace"
 
    }else{
    txtPhone.textContent="Certo!"
    txtPhone.style.color="green"
   
    }
    
  })

  web.addEventListener("input",function(){
    if(web.value.includes(".com")){
        txtWeb.textContent="Certo!"
    txtWeb.style.color="green"
  
   }else{
    txtWeb.textContent="Insira .com no final da URL do seu site"
         txtWeb.style.color="red"
   txtWeb.style.fontFamily="monospace"
 
    }
  })
 

 



form.addEventListener("submit", e=>{
    e.preventDefault();
})

const lista=document.createElement("div")
lista.id="lista"
document.body.appendChild(lista)



btnEnviar.addEventListener("click",function(){

    async function CriarUs() {
   
try {
    const newUs=[]
    newUs.push({
    name:document.getElementById("nombre").value, username:document.getElementById("username").value,email:document.getElementById("email").value, phone:Number(document.getElementById("phone").value), website:document.getElementById("site").value

        })
        document.getElementById("nombre").value=""
        document.getElementById("username").value=""
        document.getElementById("email").value=""
        document.getElementById("site").value=""
        document.getElementById("phone").value=""
        txtnome.textContent=""
        txtsobreN.textContent=""
        txtPhone.textContent=""
         txtWeb.textContent=""
        
    const responseC= await fetch("https://jsonplaceholder.typicode.com/users",{

        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(newUs)
    });

   lista.innerHTML="Caregando os dados..."
   await new Promise(r=> setTimeout(r,1000));

    if(!responseC.ok){
        throw new Error("Erro na Requisição")
    }
    
    const resul= await responseC.json()
    
    console.log(resul)
     lista.innerHTML=""
     for(let i=0;i<newUs.length;i++){
lista.innerHTML+=`<aside><p>Nome: ${newUs[i].name} ${newUs[i].username}</p><p>Email: ${newUs[i].email}</p><p>Tell: ${newUs[i].phone}</p><p>Website: ${newUs[i].website}</p>`
     }
    
} catch (error) {
    alert("Erro no programa fonte da função Criar Usuários")
}
    

}
CriarUs()

})




botao.addEventListener("click",function(){
    async function listarUs() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"GET", headers:{"Content-Type":"application/json"}
           
        });
        lista.innerHTML="<p>Carregando Dados...</p>"
         await new Promise(r=> setTimeout(r,1000));
        if(!response.ok){
            throw new Error("Erro na Requisição!!!")
        }
        const dados=await response.json()
        console.log(dados)
        lista.innerHTML=""
       
        dados.forEach(user => {
            lista.innerHTML+=`<aside>
            <p>UserId: ${user.id}</p>
            <p>Nome: ${user.name} ${user.username}</p><p>Email: ${user.email}</p><p>Tell: ${user.phone}</p><p>Cidade: ${user.address.city}<p>Rua: ${user.address.street}</p><p>Suite: ${user.address.suite}<p>Zipcode: ${user.address.zipcode}</p><p>Website: ${user.website}</p><p>Nome da empresa: ${user.company.name}</p><p>Slogan: ${user.company.catchPhrase}</p><p>BS: ${user.company.bs}</p></aside>`
        });
        
    } catch (error) {
        lista.innerHTML="<p>ERRO [500]</p>"
        alert("Erro no programa fonte!")
    }
    
}
listarUs()

})
 const btnApagar=document.getElementById("btnDelete")

 btnApagar.addEventListener("click",function(){
    async function ApagarUs() {

    const response3=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"
    })
    const resu=await response3.json()
    console.log(resu)
}
 ApagarUs()

 })
