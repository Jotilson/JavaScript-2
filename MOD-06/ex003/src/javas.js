
export function Mensagem(){
    if(paragrafo.textContent=="Olá, Mundo!"){
        paragrafo.textContent=" "
    }else{
    paragrafo.textContent="Olá, Mundo!"
}
}

 export function Mensagem2(num){

    let resultado=Number(paragrafo2.textContent)

   alert(` ${resultado}+${num}=${resultado+num}`)
}

