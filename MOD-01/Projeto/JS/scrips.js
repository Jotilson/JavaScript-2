 let verificador=0
    const Dados=[]
    const Dados3=[]
    let i=0
    let v=1
     function cadastrarPessoas(){
    
    if((document.getElementById('nomeid').value!=null || document.getElementById('nomeid').value!=0) &&( Number((document.getElementById('idaid')).value)!=0) ) {
            Dados.push({
        nome:document.getElementById('nomeid').value,
        idade:Number((document.getElementById('idaid')).value)
      })
     
     let total=Dados.length
    if(total>1){
   
        for(let a=0;a<total-1;a++){
          if(Dados[a].nome.toLowerCase()===(document.getElementById('nomeid').value).toLowerCase()){
               alert(`[Erro]Inseriu um nome que já foi registrado!`)
               v=0
               break
            }else{
                v=1
            } 
        }}
        
        if(v===1){
            
        Dados3.push(
        {nome2:document.getElementById('nomeid').value,
          idade2:Number((document.getElementById('idaid')).value)
        }
    )

        }


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
        if(Dados3[n].idade2<18){
            menor++
        }else if(Dados3[n].idade2>=18){
            maior++
        }
      }
       
    const dados2=Dados3.map(function(us){
  if(us.idade2>=18 ){
return  `Nome: ${us.nome2}\nIdade: ${us.idade2}\n===================\n`
  }else{
    return 
  }
   
}) 
 const medIdade=Dados3.reduce((total,us) =>{
        return  total+us.idade2
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
