const url = "https://viacep.com.br/$cep/json"

function findCep(){
    var cep = document.getElementById("cep").value;
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-", "");
    LoadDOC(urlWithCEP);
}

function LoadDOC(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){
        console.log("logradouro: " + data.logradouro)
        console.log("complemento: " + data.complemento)
        console.log("bairro: " + data.bairro)
        console.log("cidade: " + data.localidade)
        console.log("uf: " + data.uf)
        console.log("ibge: " + data.ibge)
        console.log("gia: " + data.gia)
        console.log("ddd: " + data.ddd)
        console.log("siafi: " + data.siafi) //não é necessário

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;


    });

}

var getJSON = function(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var xhr = xhr.status;
        if(status === 200){
            callback(null, xhr.response)
        }else{
            callback(status, xhr.response)
        }
    };

    xhr.send();
}