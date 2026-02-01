const city=document.getElementById("nomeCity")
const estado=document.getElementById("estado")
const sensacT=document.getElementById("st")
const umidade=document.getElementById("umid")
const pressao=document.getElementById("ps")
const visibilidade=document.getElementById("vs")
const vento=document.getElementById("vt")
const nuvem=document.getElementById("nv")
const nivelMar=document.getElementById("nvM")
const temp=document.getElementById("temp")
const temp_min=document.getElementById("tpmin")
const temp_max=document.getElementById("tpmax")
const nascSol=document.getElementById("nascSol")
const porSol=document.getElementById("porSol")
const img=document.getElementById("img")
const country=document.getElementById("pais")


const btn=document.getElementById("btnBuscar")

btn.addEventListener("click",function(){

    async function Clima() {
        const cityLook=document.getElementById("nameCity").value.trim()
    const url="https://api.openweathermap.org/data/2.5/weather?q="+`${cityLook}`+"&appid=d2d62f7975863098cbd673c8d4c6639b&units=metric&lang=pt"
    console.log(url)
    
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Erro na requisição")
        }
       
        
       
        const dados= await response.json()
        if(dados.weather[0].icon==="01d"){
             document.body.style.backgroundImage="url('imagens/sol.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="01n"){
             document.body.style.backgroundImage="url('imagens/ceunoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="02d"){
             document.body.style.backgroundImage="url('imagens/poucasnuvens.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="02n"){
            document.body.style.backgroundImage="url('imagens/poucasnuvensnoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="03d"){
            document.body.style.backgroundImage="url('imagens/nuvens.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="03n"){
              document.body.style.backgroundImage="url('imagens/nuvensnoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="04d"){
            document.body.style.backgroundImage="url('imagens/muitanuvem.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="04n"){
            document.body.style.backgroundImage="url('imagens/muitanuvemnoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="09d"){
            document.body.style.backgroundImage="url('imagens/chuvaforte.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="09n"){
            document.body.style.backgroundImage="url('imagens/chuvafortenoite.jfif')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="10d"){
            document.body.style.backgroundImage="url('imagens/chuva.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="10n"){
            document.body.style.backgroundImage="url('imagens/chuvadenoite.jfif')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="11d"){
             document.body.style.backgroundImage="url('imagens/trovoada.jfif')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="11n"){
             document.body.style.backgroundImage="url('imagens/trovoadanoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="13d"){
             document.body.style.backgroundImage="url('imagens/neve.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="13n"){
 document.body.style.backgroundImage="url('imagens/nevenoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'
        }else if(dados.weather[0].icon==="50d"){
    document.body.style.backgroundImage="url('imagens/neblina.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }else if(dados.weather[0].icon==="50n"){
document.body.style.backgroundImage="url('imagens/neblinanoite.jpg')"
    document.body.style.backgroundPosition='center-center'
     document.body.style.backgroundRepeat='no-repeat'
      document.body.style.backgroundSize='cover'
       document.body.style.backgroundAttachment='fixed'

        }
       city.innerHTML=dados.name
       pais.innerHTML=dados.sys.country

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
         
        console.log(mainPT)
        
       estado.innerHTML=dados.weather[0].description+" e "+mainPT
       
       sensacT.innerHTML=Math.round(Number(dados.main.feels_like))+"º"
       umidade.innerHTML=dados.main.humidity+"%"
       pressao.innerHTML=Math.round(Number(dados.main.pressure)/10)*10+"hPa"
       vs.innerHTML=Math.round(Number(dados.visibility)/1000)+"km"
       
       if(dados.wind.deg>=202.5 && dados.wind.deg<247.5)
        {
            vt.innerHTML=Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " SO"}else if(dados.wind.deg>=247.5 && dados.wind.deg<292.5){
                vt.innerHTML=Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " O"
            }else if(dados.wind.deg>=157.5 && dados.wind.deg<202.5){
  vt.innerHTML=Math.floor(Number(dados.wind.speed)*2.24)+"mph "+ " S"
            }
            nuvem.innerHTML=dados.clouds.all+"%"
 nivelMar.innerHTML=Number(dados.main.sea_level)+"hPa"
 temp.innerHTML=Math.round(dados.main.temp)+"ºC"
 temp_min.innerHTML=dados.main.temp_min+"ºC"
  temp_max.innerHTML=Math.round(dados.main.temp_max)+"ºC"
  let nasc=Number(dados.sys.sunrise)
  const date=new Date(nasc*1000)
  
  nascSol.innerHTML=date.toLocaleTimeString()
 const sunset=Number(dados.sys.sunset)
 const date2= new Date(sunset*1000)
 porSol.innerHTML=date2.toLocaleTimeString()
 let icon=dados.weather[0].icon
img.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

        console.log(dados)    
        
    } catch (error) {
        alert("Essa cidade não existe!!!")
       
    }
 }
 Clima()




})
 