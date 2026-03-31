
 const trocarMenu=document.getElementById("menu")
 const cp=document.getElementById("Capa")
 
 trocarMenu.addEventListener("click",function(){
    if(trocarMenu.innerHTML=='<i class="fa-solid fa-bars fa-2xl" style="color: #63E6BE;"></i>'){
 trocarMenu.innerHTML='<i class="fa-solid fa-xmark fa-2xl" style="color: #63E6BE;"></i>'
  cp.style.display='block'
    }else{
        trocarMenu.innerHTML='<i class="fa-solid fa-bars fa-2xl" style="color: #63E6BE;"></i>'
         cp.style.display='none'
    }
   
 })