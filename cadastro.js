function Enviar() {

    var idade = document.getElementById("idade");
    var estadocivil = document.getElementById("estadocivil");
    var salario = document.getElementById("salario");

    if (idade.value < 18) {
      alert("Não é permitido o cadastro!!");
    }
    if(estadocivil.value === "casado"){
        alert("Você deve encaminhar os documentos de sua esposa!!");
    }
    if(salario.value > 10000){
      alert("Necessário declarar imposto de renda!!");
    }

}

