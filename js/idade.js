function idade(mes, ano) {
    let idade  = new Date().getFullYear() - ano;
    let mesatual = new Date().getMonth()+1;
    if(mesatual >= mes){
        return idade;
    }else{
        return idade - 1
    }
}

const idadeatual = idade(6, 1983);
const elemento = document.getElementById("idade");

if (elemento) {
        // Captura todo o conteúdo HTML original
        const conteudoOriginal = elemento.innerHTML;
        
        // Substitui apenas a parte numérica usando regex
        elemento.innerHTML = conteudoOriginal.replace(
            /(<strong>Idade:<\/strong>\s*)\d+/, 
            `$1${idadeatual}` // Substitua 1986 pelo seu ano de nascimento
        );
    }

