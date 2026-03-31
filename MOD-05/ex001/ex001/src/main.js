import soma from "./math"

const btn=document.getElementById("btn")
const valor=document.getElementById("resu")

 const num=soma(10,5)

 btn.addEventListener("click",function(){
 valor.textContent=num

})