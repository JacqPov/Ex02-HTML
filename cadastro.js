function Enviar() {

    var idade = document.getElementById("idade");
    var estadocivil = document.getElementById("estadocivil");
    var salario = document.getElementById("salario");

    if (idade.value < 18) {
      alert("Nao é permitido o cadastro!!");
    }
    if(estadocivil.value === "casado"){
        alert("Necessario encaminhar os documentos do conjuge!!");
    }
    if(salario.value > 10000){
      alert("Necessario declarar imposto de renda!!");
    }

}

