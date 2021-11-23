$.fn.exists = () => {
    if(this.length > 0) return $(this);
    return false;
};

$.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        ($(element).parent(".input-group").exists() || $(element)).after(error);
    },
    highlight: function (element) {
        ($(element).parent(".input-group").exists() || $(element)).addClass('is-invalid');
        ($(element).parent(".input-group").exists() || $(element)).removeClass('is-valid');

    },
    unhighlight: function (element) {
        ($(element).parent(".input-group").exists() || $(element)).removeClass('is-invalid');
        ($(element).parent(".input-group").exists() || $(element)).addClass('is-valid');
    }
});

$.validator.addMethod('checkCep',
    function checkCep(value, element){
        if (/^[0-9]{5}(-*){1}[0-9]{3}$/.test(value, element)){
            return $.get('https://viacep.com.br/ws/'+value+'/json/unicode/', (resposta) => {
                if(resposta.erro) {
                    $("#btnOpenEndereco").css("display","none");
                    $("#continueForm").css("display","none");

                    $(element).addClass("is-invalid");
                    $(element).removeClass("is-valid");
                    return false;
                }

                $("#btnOpenEndereco").css("display","block");
                $("#logradouro").val(resposta.logradouro);
                $("#complemento").val(resposta.complemento);
                $("#bairro").val(resposta.bairro);
                $("#cidade").val(resposta.localidade);
                $("#uf").val(resposta.uf);

                $("#continueForm").slideDown(500);
                $("#down").css('display','none');
                $("#up").css('display','inline');

                $(element).attr('data-cep-valid', true);

                setTimeout(() => {
                    $("#number").focus();
                }, 500);

                $(element).addClass("is-valid");
                $(element).removeClass("is-invalid");
                return true;
            });
        }
        return false;
    },
    'CEP inválido!'
);

function checkCepValidated(element) {
    console.log(element, $(element).attr('data-cep-valid') === 'true');
    return $(element).attr('data-cep-valid') === 'true';
}

function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

var input = document.querySelector('input[type="phone"]');
input.addEventListener('keydown', function(e) {
  var numero = (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
  var controlos = [8, 37, 39].includes(e.keyCode);
  if (!numero && !controlos) return e.preventDefault();
});

function preencherExpC(event) {
    $('[name=exp_c]').val($('#exp_m').val()+'/'+$('#exp_a').val());
}

$("#exp_m").on('change', preencherExpC);
$("#exp_a").on('change', preencherExpC);

// $("#cep").on('input', (event) => {
//     if (/^[0-9]{5}(-*){1}[0-9]{3}$/.test(event.target.value)){
//         $("#btnOpenEndereco").css("display","block");
//         $.get('https://viacep.com.br/ws/'+event.target.value+'/json/unicode/', (resposta) => {
//             if(resposta.erro !== true){
//                 $("#logradouro").val(resposta.logradouro);
//                 $("#complemento").val(resposta.complemento);
//                 $("#bairro").val(resposta.bairro);
//                 $("#cidade").val(resposta.localidade);
//                 $("#uf").val(resposta.uf);
//                 $("#cep").addClass("is-valid");
//                 $("#cep").removeClass("is-invalid");


//                 // $('#siteModal').modal('show');
//                 $("#continueForm").slideDown(500);
//                 $("#down").css('display','none');
//                 $("#up").css('display','inline');

//                 setTimeout(() => {
//                     $("#number").focus();
//                 }, 500);

//             } else {
//                 $("#cep").addClass("is-invalid");
//                 $("#cep").removeClass("is-valid");
//                 $("#btnOpenEndereco").css("display","none");
//                 $("#continueForm").css("display","none");
//             }
//         });
//     } else {
//        $("#cep").addClass("is-invalid");
//        $("#cep").removeClass("is-valid");
//        $("#textInfos").removeClass("d-block");
//     }
// })

$("#btnOpenEndereco").on("click", function(){
    if($('#continueForm').css('display') == 'none'){
        $("#continueForm").slideDown(500);
        $("#down").css('display','none');
        $("#up").css('display','inline');
    } else {
        $("#continueForm").slideUp(500)
        $("#down").css('display','inline');
        $("#up").css('display','none');
    }
});

// $("#formEndereco").validate({
//     submitHandler: (form) => {
//         $("#textInfos").html(
//             $("#logradouro").val()+"-"+
//             $("#number").val()+"-"+
//             $("#cidade").val()+"-"+
//             $("#uf").val()+"-"+
//             $("#complemento").val(),
//             );
//         $("#uf_").val($("#uf").val())
//         $("#cidade_").val($("#cidade").val())
//         $("#rua_").val($("#rua").val())
//         $("#numero_").val($("#number").val())
//         $("#complemento_").val($("#complemento").val())

//         $('#siteModal').modal('hide');
//         return false;
//     }
//    });


$("#checkout").validate({
    rules:{
        phone: {
            required: true,
            phone: true
        },
        email: {
            required: true,
            email: true
        },
        'email-confirm': {
            required: true,
            equalTo: "#email",
        },
        cep: {
            checkCep: true,
            depends: () => checkCepValidated('#cep'),
        },
    },
    messages: {
        phone: {
            minlength: 12
        },
        'email-confirm': {
            minlength: 3
        }
    }
});

var min = 12;
var max = 95;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#qtdPessoas").html(getRandomInt(12,95))

// console.log(getRandomInt(12,95))


// const getRandomInt = (min,max) =>
//     Math.floor(Math.random() * (max - min + 1)) + min
//     console.log(getRandomInt (12, 95))



