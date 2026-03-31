//FUNÇÕES DA PREVISÃO DO CLIMA

 //Função dos dias da 
  function DayRain(dados){
  
   dados.list.forEach(data => {
  art.innerHTML+=`<aside class=asid2 onclick="ola()"> ${data.dt_txt}  </aside>`
   
   });

  }

  //Função para pegar o Nascer do SOL
  function Sunrise(dados){
     let nasc=dados.city.sunrise
  const date=new Date(nasc*1000)
  
 return date.toLocaleTimeString()
    
  }


  //Função para pegar o Por do SOL
   function Sunset(dados){
    let por=dados.city.sunset
  const date2=new Date(por*1000)
  
 return date2.toLocaleTimeString()
    
  }
 
  //Função para pegar o Estado do Clima
   function weather(dados){
    const nome=dados.weather[0].main
 const Traduzir={
        "Clear":"Limpo",
        "Clouds":"Nublado",
        "Rain":"Chuva",
        "Drizzle":"Garoa",
        "Thunderstorm":"Trovoada",
        "Snow":"Neve",
        "Mist":"Névoa",
        "Smoke":"Fumaça",
        "Haze":"Neblina",
        "Dust":"Poeira",
        "Fog":"Nevoeiro",
        "Sand":"Areia",
        "Ash":"Cinza",
        "Squall":"Rajada",
        "Tornado":"Tornada"
       }
     
         const mainPT=Traduzir[nome]

 return mainPT+" e "+ dados.weather[0].description

   }

   //Função para pegar a Temperatura
   function Temp(dados){
 return Math.round(Number(dados.main.temp))+"ºC"
   }

   //Função para pegar o nível do Mar
   function SeaLevel(dados){
  return dados.main.sea_level+"hPa"
   }
   //Função que retorna a direção do vento
 function DirectionWind(dados){
  if(dados.wind.deg>=202.5 && dados.wind.deg<247.5)
        {
            return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " SO"

          }else if(dados.wind.deg>=247.5 && dados.wind.deg<292.5){
               return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " O"

            }else if(dados.wind.deg>=157.5 && dados.wind.deg<202.5){
     return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " S"

            }else if(dados.wind.deg>=348.75 && dados.wind.deg<=360){
              return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "N"

            }else if(dados.wind.deg>=0 && dados.wind.deg<11.25){
              return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "N"

            }else if(dados.wind.deg>=11.25 && dados.wind.deg<33.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "NNE"

            }else if(dados.wind.deg>=33.75 && dados.wind.deg<56.25){
              return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "NE"

            }else if(dados.wind.deg>=56.25 && dados.wind.deg<78.75){
            return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "ENE"

            }else if(dados.wind.deg>=78.75 && dados.wind.deg<101.25){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "E"

            }else if(dados.wind.deg>=101.25 && dados.wind.deg<123.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "ESE"
            }
            else if(dados.wind.deg>=123.75 && dados.wind.deg<146.25){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "SSE"
            }
            else if(dados.wind.deg>=146.25 && dados.wind.deg<168.75){
              return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "SSE"
            }
            else if(dados.wind.deg>=168.75 && dados.wind.deg<191.25){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "S"
            }
            else if(dados.wind.deg>=191.25 && dados.wind.deg<213.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "SSW"
            }
            else if(dados.wind.deg>=213.75 && dados.wind.deg<236.25){
            return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "SW"
            }
            else if(dados.wind.deg>=236.25 && dados.wind.deg<258.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "WSW"
            }
            else if(dados.wind.deg>=258.75 && dados.wind.deg<281.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "W"
            }
            else if(dados.wind.deg>=281.75 && dados.wind.deg<303.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "WNW"
            }
            else if(dados.wind.deg>=303.75 && dados.wind.deg<326.25){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "NW"
            }
            else if(dados.wind.deg>=326.25 && dados.wind.deg<348.75){
             return Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ "NNW"
            }

 
 }

   //Função para pegar a Umidade
   
   function humidity(dados){
   
  return dados.main.humidity
   }

   //Função para Probabilidade de Precipitação
   function POP(dados){
 return ((dados.pop)*100)+"%"
   }

   //Função que retorna a previsão da chuva
 function PrevisaoChuva(dados){  
    if(dados.rain){
  if(dados.rain["3h"]<2){
    return "Fraca"

  }else if(dados.rain["3h"]>2 && dados.rain["3h"]<10){
      return " Moderada"
  }else if(dados.rain["3h"]>10){
    return "Forte"
  }
  }else{
 return "Sem Chuva"
}
 }


  //Declarações das tags do menuBar
 const trocarMenu=document.getElementById("menu")
 const cp=document.getElementById("Capa")
 
 //Evento para o menuBar
 trocarMenu.addEventListener("click",function(){
    if(trocarMenu.innerHTML=='<i class="fa-solid fa-bars fa-2xl" style="color: #63E6BE;"></i>'){
 trocarMenu.innerHTML='<i class="fa-solid fa-xmark fa-2xl" style="color: #63E6BE;"></i>'
  cp.style.display='block'
    }else{
        trocarMenu.innerHTML='<i class="fa-solid fa-bars fa-2xl" style="color: #63E6BE;"></i>'
         cp.style.display='none'
    }
   
 })
      
 //Declarações das tags em HTML
 const art=document.getElementById("nav")
 const nascSol=document.getElementById("nascSol")
 const porSol=document.getElementById("porSol")
 const EstaClima=document.getElementById("estClima")
 const nuvens=document.getElementById("nv")
 const temp=document.getElementById("temp")
 const nvM=document.getElementById("nvMar")
 const vento=document.getElementById("vt")
 const umid=document.getElementById("um")
 const probP=document.getElementById("pp")
 const ChuvaPrevista=document.getElementById("ChvP")

 const btn=document.getElementById("btn")
 //API Rest

 btn.addEventListener("click",function(){
   async function PrevisaoClima() {
 let forecastData=[];
   try {
    //Indo pegar a API
      const cityLook=document.getElementById("nameCity").value.trim()
      let response
      if(cityLook==0){
        
        const nova=localStorage.getItem("cidadePrevisao")
     response=await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+`${nova}`+"&appid=d2d62f7975863098cbd673c8d4c6639b&units=metric&lang=pt")
       const newCity=document.getElementById("nameCity")
       newCity.value=nova
      }else{

         response=await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+`${cityLook}`+"&appid=d2d62f7975863098cbd673c8d4c6639b&units=metric&lang=pt")
         localStorage.setItem("cidadePrevisao",cityLook)
      }
  

      if(!response.ok){
          throw new Error("Erro na requisição")
      }

      //Resposta do API
   const dados= await response.json()
   forecastData=dados.list
 
   
   let previsao
    const video=document.getElementById("vd")


  document.addEventListener("click",function(e){
    if(e.target.classList.contains("asid2")){
         const dt=e.target.textContent.trim();


         const datA=dt
           
          previsao=forecastData.find(item=>item.dt_txt==datA);
   if(!previsao){ alert("Date not found")}

    if(previsao.sys.pod=="n"){
    video.src='videos/lua.mp4'
   
   }else if(previsao.sys.pod=="d"){
     video.src='videos/sol.mp4'
      
   }

 //Descrição do Clima
 EstaClima.innerHTML=weather(previsao)

 //Nuvens
 nuvens.innerHTML=dados.list[0].clouds.all+"%"

 //Temperatura Atual
 temp.innerHTML=Temp(previsao)

 //Nível do Mar
 nvM.innerHTML=SeaLevel(previsao)
  
 //Direção do Vento
   vento.innerHTML=DirectionWind(previsao)
          
//Umidade
 umid.innerHTML=humidity(previsao)

//Probabilidade de precipitação
 probP.innerHTML=POP(previsao)

//Previsão da Chuva
ChuvaPrevista.innerHTML=PrevisaoChuva(previsao)
 
    }    
   
  })

   
    //Nascer do SOL
   nascSol.innerHTML=Sunrise(dados)

 //Por do SOL
 porSol.innerHTML=Sunset(dados)

 //Dias da Previsão
DayRain(dados)

    
   
      console.log(dados)
   } catch (error) {
      alert("Erro no programa fonte!!!")
      console.log(dados)
   }
   
 }
  PrevisaoClima()

 
 

 })
  

