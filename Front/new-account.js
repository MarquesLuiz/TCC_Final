function validarFormulario() {
    var nome = document.getElementById("name").value;
    var cpf = document.getElementById("CPF").value;
    var rg = document.getElementById("RG").value;
    var telefone = document.getElementById("Telefone").value;
    var nascimento = document.getElementById("data-nasc").value;
    var email = document.getElementById("email").value;
    var sexo =;

    if (nome == "") {
        alert("Por Favor, Digite seu Nome");
        return false;
    }
    if (cpf == "") {
        alert("Por Favor, Digite seu CPF");
        return false;
    }
    if (rg == "") {
        alert("Por Favor, Digite sua RG");
        return false
    }
    if (telefone == "") {
        alert("Por Favor, Digite seu telefone");
        return false;
    }
    if (nascimento == "") {
        alert("Por Favor, Digite sua data de nascimento");
        return false;
    }
    if (email == "") {
        alert("Por Favor, Digite seu Email");
        return false;
    }

    return true
}