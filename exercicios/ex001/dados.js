const pessoa={
    nome:"Domingos Miala",
    idade:16,
    pais:'Angola'
}
const dataDeNascimento={
    anoAtual:2025,anoDeNascimento:2009
}
 console.log(`Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos de idade e sou de ${pessoa.pais}\n`);
 console.log(`===========================\n`);
 console.log(`Idade: ${(dataDeNascimento.anoAtual-dataDeNascimento.anoDeNascimento)}`);
 if(dataDeNascimento.anoAtual-dataDeNascimento.anoDeNascimento>=18){
    console.log(false);
 }else{
    console.log(true);
 }