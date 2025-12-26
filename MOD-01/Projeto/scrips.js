 let verificador=0;
    const Dados=[]
    let i=0
   
     function cadastrarPessoas(){
    
         if((document.getElementById('nomeid').value!=null || document.getElementById('nomeid').value!=0) &&( Number((document.getElementById('idaid')).value)!=0) ) {
            Dados.push({
        nome:document.getElementById('nomeid').value,
        idade:Number((document.getElementById('idaid')).value)
      })
i++
verificador=1
document.getElementById('nomeid').value=""
document.getElementById('idaid').value=""

        }else{
            alert(`Preencha as caixas com o seus dados!`)
            verificador=0
        }
      
      
     }
     function listarPessoas(){
       
        if(verificador===0){
             alert(`Preencha as caixas com o seus dados!`)
        }else{
             document.getElementById('dados').hidden=false
             let menor=0,maior=0
        const div=document.getElementById('listar')
      for(let n=0;n<i;n++){
        if(Dados[n].idade<18){
            menor++
        }else if(Dados[n].idade>=18){
            maior++
        }
      }
       
    const dados2=Dados.map(function(us){
  if(us.idade>=18 ){
return  `Nome: ${us.nome}\nIdade: ${us.idade}\n===================\n`
  }else{
    return 
  }
   
}) 
 const medIdade=Dados.reduce((total,us) =>{
        return  total+us.idade
    },0)
 
    dados2.push(
    `Total de Pessoas: ${i}\nTotal de maiores: ${maior}\nTotal de menores: ${menor}\nMédia das idades: ${medIdade/i}\n`
    )
   

        div.textContent=dados2.join("")
         
       

        }
       
     }
     function esconder(){
        document.getElementById('dados').hidden=true
     }
