 let total=0
 function Mostrar(nome,preco){
   
  info.innerHTML+=`<p>${nome}</p>`
 total+=Number(preco)
  price.textContent="Total: "+total+"€"
  info.style.display='block'
 }



  export default Mostrar
  
 