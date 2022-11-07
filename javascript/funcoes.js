var nome     = "";
var telefone = "";
var endereco = "";
var cidade   = "";
var msg      = "";

function coletar(){
    nome = document.getElementById('tNome').value;
    telefone = document.getElementById('tTelefone').value;
    endereco = document.getElementById('tEndereco').value;
    cidade = document.getElementById('tCidade').value;

    //Agrupar tudo na variavel MSG
    msg = "Nome:"       +nome     +
          "\nTelefone:" +telefone +
          "\nEndereco:" +endereco +
          "\nCidade:"   +cidade  ;

    //Mostrar na tela
    document.getElementById('tResultado').innerHTML = msg;
}//Fim do function