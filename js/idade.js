function idade(mes, ano) {
    let idade  = new Date().getFullYear() - ano;
    let mesatual = new Date().getMonth()+1;
    if(mesatual >= mes){
        return idade;
    }else{
        return idade - 1
    }
}

idadeatual = idade(6, 1983);
console.log(idadeatual);
document.getElementById("idade").innerHTML = idadeatual;
