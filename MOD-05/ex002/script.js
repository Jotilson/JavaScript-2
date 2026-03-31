
const btn=document.getElementById("btn")



btn.addEventListener("submit",function(e){

 e.preventDefault();
 const nome=document.getElementById("nome").value
const idade=document.getElementById("year").value
  
 const user= {name:nome, year:idade}
 localStorage.setItem("user", JSON.stringify(user))
 

 const userR= JSON.parse(localStorage.getItem("user"));
 console.log(userR)
})



