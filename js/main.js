/* JS PRINCIPAL */

function ConsultaCep() {

    var CodCep = document.getElementById("CodCep").value;
    var LinkCep = "https://viacep.com.br/ws/" + CodCep + "/json/";

    $.ajax({
        url: LinkCep,
        type: "GET",
        success: function (response) {
            console.log(response);

            /* MANEIRA TRADICIONAL*/

            /*document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("UF").innerHTML = response.uf;*/

            /* COM JQUERY */

            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#UF").html(response.uf);



        }
    })

}