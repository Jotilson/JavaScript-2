    
 const pptx= document.getElementById("lista")
 const form=document.getElementById("formul")
 const url2=document.getElementById("caminho").value
 form.addEventListener("submit",e=>{
  e.preventDefault()
 })
  
 function buscarURL(){
  const url=document.getElementById("caminho").value

  return url
 }

 async function buscarUsuarios() {
    let n=0
    
       pptx.innerHTML="Carregando dados..."
       const pegar=buscarURL()
       console.log(pegar)
       try {
         await new Promise(r => setTimeout(r, 500));
    const response=await fetch(pegar)
        

        const dados= await response.json()
     pptx.innerHTML=""
    url2.value=0
        dados.forEach(titulo => {
            if(n<10){
            pptx.innerHTML+=`<p>Título:${titulo.body}</p>`
            }
                n++});
         
        console.log(dados)
            pptx.style.border="4px solid black"
            pptx.style.fontFamily="Arial"
            if(!response.ok){
             throw new Error("Erro na requisição")
            }
        
       } catch (error) {
        alert("Erro ao carregar os dados ")
       }
      
       
    
        

 }
 buscarUsuarios()
