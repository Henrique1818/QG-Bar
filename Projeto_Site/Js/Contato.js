function Mascara(objeto, funcao)
{
    valorObjeto = objeto
    valorFuncao = funcao
    
    setTimeout("ExecutarMascara()", 1)
}

function ExecutarMascara()
{
    valorObjeto.value= valorFuncao(valorObjeto.value)
}

function MascaraTelefone(valor)
{
    valor = valor.replace(/\D/g,"");
    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");
    return valor;
}

function ObterId(elemento){
	return document.getElementById(elemento);
}

window.onload = function(){
	ObterId('telefone').onkeyup = function() {
		Mascara( this, MascaraTelefone );
	}
}

function VerificarTelefone(campo, botao, mensagem) {
    var reg = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    if (document.getElementById(campo).value.length < 14 || !document.getElementById(campo).value.match(reg)) {
        document.getElementById(campo).style.border = "1px solid #ff0000";
        document.getElementById(botao).disabled = true;
        document.getElementById(mensagem).style.display = "block";
        document.getElementById(mensagem).innerHTML = `<span style='color: red; font-size: .8rem;'>Campo está inválido!</span>`
    }
    else {
        document.getElementById(campo).style.border = "1px solid #dededd";
        document.getElementById(botao).disabled = false;
        document.getElementById(mensagem).style.display = "none";
        document.getElementById(mensagem).innerHTML = '';
    }
}

function VerificarCamposVazios(campo, botao, mensagem) {
    if (document.getElementById(campo).value == "") {
        document.getElementById(campo).style.border = "1px solid #ff0000";
        document.getElementById(botao).disabled = true;
        document.getElementById(mensagem).style.display = "block";
        document.getElementById(mensagem).innerHTML = `<span style='color: red; font-size: .8rem;'>Campo é obrigatório!</span>`;
    }
    else {
        document.getElementById(campo).style.border = "1px solid #dededd";
        document.getElementById(botao).disabled = false;
        document.getElementById(mensagem).style.display = "none";
        document.getElementById(mensagem).innerHTML = '';
    }
}

document.getElementById('formularioContato').addEventListener('submit', function (e) {
    var mensagem = document.getElementById('mensagemDeEnvio');
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;

    if (nome != "" || sobrenome != "" || telefone != "" || email != "")
    {
        mensagem.innerHTML = `<span style='font-size: .8rem; color: #badc58; font-weight: bold;'>Recebemos seu contato, muito obrigado!</span>`;
    }
    else {
        mensagem.innerHTML = `<span style='color: red; font-size: .8rem;'>Por favor, preencher todos campos obrigatórios!</span>`;
    }

    e.preventDefault();
});