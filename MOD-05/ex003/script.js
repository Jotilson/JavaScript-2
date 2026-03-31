
const array=[4,2,7,1,5,6,3]

for(let i=0, len=array.length; i<len;i++){console.log(array[i])}

//MAP()-TRANSFORMAÇÃO
  const usuarios=[
    {nome:"Domingos",idade:16},{nome:"Jotilson",idade:10}
  ]
  const nomes=usuarios.filter(user=> user.idade>13)
  console.log(nomes)

 const soma= array.reduce((acumulador,total)=> {
    return acumulador+total;
 },0);
 console.log(soma);

 console.log(array.sort((a,b)=>a-b));

 const produtos=[
    {nome:"Teclado",preco:50, categoria:"eletronico"},
    {nome:"Camisa",preco:20, categoria:"roupa"},
    {nome:"Mouse",preco:30, categoria:"eletronico"}
 ];

 produtos.push(
    {nome:"Monitor",preco:50, categoria:"eletronico"}
 );

 const produtosEle= produtos
 .filter(prod => prod.categoria==="eletronico")
 .sort((a,b)=>a.preco-b.preco)
 .map(produ=> produ.nome)

  let total=0
 for(let n=0, len=produtos.length; n<len;n++){
     total+=produtos[n].preco
 }

 console.log(produtosEle);
  console.log(total);

