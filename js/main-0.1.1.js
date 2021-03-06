//-== Header fixed on top animation
// (function () {

//     var headerScroll = getId('header-main'),
//         scrollHeight = 10,
//         classHeader = 'active';

//     //SCROLL
//     window.addEventListener("scroll", scrollOn);

//     function scrollOn() {
//         animatedScroll(headerScroll, classHeader, scrollHeight);
//     }

//     //Função que on scroll muda o comportamento do elemento
//     function animatedScroll(element, classN, height) {
//         y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
//         if (y > height) {
//             element.className = classN;
//         } else {
//             element.className = '';
//         }
//     }

//     // Função toggle adiciona ou tira a class do elemento
//     function toggle(element, classe) {
//         element.className = element.className ? '' : classe;
//     }

//     //Função que retorna o id do elemento
//     function getId(id) {
//         return document.getElementById(id);
//     }


// })();
//------------------------ Header



//-== HamburgerMenu Toggle
// (function(){
//     function hamburgueToggle() {
//         document.getElementById('hamb').classList.toggle('open');
//         document.getElementById('header-main').classList.toggle('open');
//     }
    
//     // Select all the elements with example class.
//     var hambComponent = document.querySelectorAll('.hamb');
//     var itemNavComponent = document.querySelectorAll('.itemNav');
    
//     // Loop through the elements.
//     for (var i = 0; i < hambComponent.length; i++) {
//         hambComponent[i].addEventListener('click', hamburgueToggle);
//     }
//     for (var i = 0; i < itemNavComponent.length; i++) {
//         itemNavComponent[i].addEventListener('click', hamburgueToggle);
//     }
// })();
//======================== /HamburgerMenu Toggle


//== Anchor Scrollsmooth
// Vanilla JavaScript Scroll to Anchor @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
// (function() {
    
//     function scrollTo() {
//         const links = document.querySelectorAll('.menu-item a');
//         links.forEach(each => (each.onclick = scrollAnchors));
//     }

//     function scrollAnchors(e, respond = null) {
//         const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//         e.preventDefault();
//         var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//         const targetAnchor = document.querySelector(targetID);
//         if (!targetAnchor) return;
//         const originalTop = distanceToTop(targetAnchor);
//         window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//         const checkIfDone = setInterval(function() {
//             const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//             if (distanceToTop(targetAnchor) === 0 || atBottom) {
//                 targetAnchor.tabIndex = '-1';
//                 targetAnchor.focus();
//                 window.history.pushState('', '', targetID);
//                 clearInterval(checkIfDone);
//             }
//         }, 150);
//     }

// 	scrollTo();
// })();

//======================== /Anchor Scrollsmooth


//-== NewsletterModal Toggle
// (function(){
//     function modalToggle() {
//         document.getElementById('form-sticker').classList.toggle('in');
//         document.getElementById('modal-backdrop').classList.toggle('in');
//         document.getElementById('modal-backdrop-btn').classList.toggle('in');
//         document.getElementById('body').classList.toggle('in');
//     }
    
//     // Select all the elements with example class.
//     var btnModal = document.querySelectorAll('.btn-modal');
//     var backdropBtn = document.querySelectorAll('.modal-bta');
    
//     // Loop through the elements.
//     for (var i = 0; i < btnModal.length; i++) {
//         btnModal[i].addEventListener('click', modalToggle);
//     }
//     for (var i = 0; i < backdropBtn.length; i++) {
//         backdropBtn[i].addEventListener('click', modalToggle);
//     }
// })();
//======================== /NewsletterModal Toggle

var CpfCnpjMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
},
cpfCnpjpOptions = {
onKeyPress: function(val, e, field, options) {
  field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
}
};

$(document).ready(function() {

    $("#first-name").blur(function(){marcaEvento('#first-name','pagamento','preenchimento')});
    $("#last-name").blur(function(){marcaEvento('#last-name','pagamento','preenchimento')});
    $("#numero").blur(function(){marcaEvento('#numero','pagamento','preenchimento')});
    $("#complementoEndereco").blur(function(){marcaEvento('#complementoEndereco','pagamento','preenchimento')});
    $("#cpf").blur(function(){marcaEvento('#cpf','pagamento','preenchimento')});
    $("#email").blur(function(){marcaEvento('#email','pagamento','preenchimento')});
    $("#email-confirm").blur(function(){marcaEvento('#email-confirm','pagamento','preenchimento')});
    $("#cep").blur(function(){marcaEvento('#cep','pagamento','preenchimento')});
    $("#uf").blur(function(){marcaEvento('#uf','pagamento','preenchimento')});
    $("#localidade").blur(function(){marcaEvento('#localidade','pagamento','preenchimento')});
    $("#bairro").blur(function(){marcaEvento('#bairro','pagamento','preenchimento')});
    $("#logradouro").blur(function(){marcaEvento('#logradouro','pagamento','preenchimento')});
    $("#telefone").blur(function(){marcaEvento('#telefone','pagamento','preenchimento')});
    $("#holdername_c").blur(function(){marcaEvento('#holdername_c','pagamento','preenchimento')});
    $("#number_c").blur(function(){marcaEvento('#number_c','pagamento','preenchimento')});
    $("#exp_c").blur(function(){marcaEvento('#exp_c','pagamento','preenchimento')});  
    $("#cvv_c").blur(function(){marcaEvento('#cvv_c','pagamento','preenchimento')});
    $("#installments").blur(function(){marcaEvento('#installments','pagamento','preenchimento')});

    $("#cpf").mask(CpfCnpjMaskBehavior, cpfCnpjpOptions);
    $("#cep").mask("00000-000");
    $("#telefone").mask("(00) 00000-0000");
    $("#number_c").mask("0000 0000 0000 0000");
    $("#exp_c").mask("00/00");
    $("#cvv_c").mask("000")
});

function preencherName(event) {
  $('[name=name_]').val($('#first-name').val()+' '+$('#last-name').val());
}

$("#first-name").on('input', preencherName);
$("#last-name").on('input', preencherName);

const btnSubmit = document.querySelector("#btn-submit");
const formSubmit = document.querySelector("#checkout");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const cpf = document.querySelector("#cpf");
const cep = document.querySelector("#cep");
const address = document.querySelector("#logradouro");
const numberAddress = document.querySelector("#numero");
const complement = document.querySelector("#complementoEndereco");
const bairro = document.querySelector("#bairro");
const uf = document.querySelector("#uf");
const city = document.querySelector("#localidade");
const phone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#email-confirm");
const codigoSeguranca = document.querySelector("#cvv_c");
const numeroC = document.querySelector("#number_c");
const nomeC = document.querySelector("#holdername_c");
const expC = document.querySelector("#exp_c");
// const expCM = document.querySelector("#exp_cm");
// const expCA = document.querySelector("#exp_ca");
const terms = document.querySelector("#terms");

async function getCEP(cepValue) {
  const options = {
      method: "GET",
      mode: "cors",
      cache: "default"
  };

  try {
      const url = await `https://viacep.com.br/ws/${cepValue}/json/`;
      const response = await fetch(url, options);

      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error);
      return {erro: true}
  }
};

firstName.addEventListener("input", () => {
  inputFNameCheck();
});

firstName.addEventListener("blur", () => {
  inputFNameCheck();
});

cpf.addEventListener("input", () => {
  inputCpfCheck();
});

cpf.addEventListener("blur", () => {
  inputCpfCheck();
});

cep.addEventListener("input", e => {
  inputCepCheck();
});

cep.addEventListener("blur", e => {
  inputCepCheck();
});

phone.addEventListener("input", () => {
  inputPhoneCheck();
});

phone.addEventListener("blur", () => {
  inputPhoneCheck();
});

email.addEventListener("input", () => {
  inputEmailCheck();
});

email.addEventListener("blur", () => {
  inputEmailCheck();
});

emailConfirm.addEventListener("input", () => {
  inputEmailConfirmCheck();
});

emailConfirm.addEventListener("blur", () => {
  inputEmailConfirmCheck();
});

numeroC.addEventListener("input", () => {
  inputNumberCardCheck();
});

numeroC.addEventListener("blur", () => {
  inputNumberCardCheck();
});

nomeC.addEventListener("input", () => {
  inputNameCardCheck();
});

nomeC.addEventListener("blur", () => {
  inputNameCardCheck();
});

expC.addEventListener("input", () => {
  inputExpCCheck();
});

expC.addEventListener("blur", () => {
  inputExpCCheck();
});

// expCM.addEventListener("change", () => {
//   selectMonthCardCehck();
// });

// expCA.addEventListener("change", () => {
//   selectYearCardCheck();
// });

codigoSeguranca.addEventListener("input", () => {
  inputSecurityCodeCheck();
});

codigoSeguranca.addEventListener("blur", () => {
  inputSecurityCodeCheck();
});

function inputFNameCheck() {
  const firstNameValue = firstName.value.trim();
  const re = /^[A-Za-záàâãéèêíïóôõöüúçñÁÀÂÃÉÈÍÏÓÔÕÖÜÚÇÑ ]+$/;

  if (firstNameValue === "" || firstNameValue === null || firstNameValue === undefined) {
      setErrorFor(firstName, "Este campo é requerido");
      return false;
  }

  if (firstNameValue.length < 3) {
      setErrorFor(firstName, "Este campo precisa ter pelo menos 3 caracteres");
      return false;
  }

  if(!re.test(firstNameValue)) {
      setErrorFor(firstName, "Este campo não aceita número e nem caracteres especiais");
      return false;
  }

  setSuccessFor(firstName);
  return true;
};

function inputLNameCheck() {
  const lastNameValue = lastName.value.trim();
  const re = /^[A-Za-záàâãéèêíïóôõöüúçñÁÀÂÃÉÈÍÏÓÔÕÖÜÚÇÑ ]+$/;

  if (lastNameValue === "" || lastNameValue === null || lastNameValue === undefined) {
      setErrorFor(lastName, "Este campo é requerido");
      return false;
  }

  if (lastNameValue.length < 3) {
      setErrorFor(lastName, "Este campo precisa ter pelo menos 3 caracteres");
      return false;
  }

  if(!re.test(lastNameValue)) {
      setErrorFor(lastName, "Este campo não aceita número e nem caracteres especiais");
      return false;
  }

  setSuccessFor(lastName);
  return true;
};

/** CPF Validation */
function inputCpfCheck() {
  let cpfValue = cpf.value.trim().replace(/[\.|\/|\-]/g, "");

  if(cpfValue === "" || cpfValue === null || cpfValue === undefined) {
      setErrorFor(cpf, "Este campo é requerido");
      return false;
  }

  if (cpfValue.length < 11) {
      setErrorFor(cpf, "Por favor, preencher um cpf válido");
      return false;
  }

  if(cpfValue.length > 11 && cpfValue.length < 14) {
      setErrorFor(cpf, "Por favor, preencher um cnpj válido");
      return false;
  }

  setSuccessFor(cpf);
  return true;
}

/** CEP validation */
async function inputCepCheck() {
  const cepValue = cep.value.trim().replace("-", "");

  if (cepValue === "" || cepValue === null || cepValue === undefined) {
      setErrorFor(cep, "Este campo é requerido");
      hideCEPInputs();
      return false;
  }
  
  if (cepValue.length < 8 || cepValue.length > 8) {
      setErrorFor(cep, "Por favor, digite um CEP válido");
      hideCEPInputs();
      return false;
  }
  
  const response = await getCEP(cepValue);

  try {
      if (response.erro === true) {
          setErrorFor(cep, "Por favor, digite um CEP válido");
          hideCEPInputs();
          return false;
      } else {
          setSuccessFor(cep);
          showDataCEP(response);
          showCEPInputs();
          return true;
      }
  } catch (error) {
      console.log(error)
  }
      
  return false;
};

function inputAddressCheck() {
  const addressValue = address.value.trim();

  if (addressValue === "" || addressValue === null || addressValue === undefined) {
      setErrorFor(address, "Este campo é requerido");
      return false;
  }

  setSuccessFor(address);
  return true;
};


function inputNumberAddressCheck() {
  const numberAddressValue = numberAddress.value.trim();

  if (numberAddressValue === "" || numberAddressValue === null || numberAddressValue === undefined) {
      setErrorFor(numberAddress, "Campo requerido");
      return false;
  }

  setSuccessFor(numberAddress);
  return true;
}

/** ONLY NUMBERS FIELD NUMBER */
numberAddress.addEventListener('keydown', function(e) {
var numero = (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105);
var controlos = [8, 9, 37, 39].includes(e.keyCode);
if (!numero && !controlos) return e.preventDefault();
});

function inputBairroCheck() {
  const bairroAddressValue = bairro.value.trim();

  if (bairroAddressValue === "" || bairroAddressValue === null || bairroAddressValue === undefined) {
      setErrorFor(bairro, "Este campo é requerido");
      return false;
  }

  if (bairroAddressValue.length < 3) {
      setErrorFor(bairro, "Este campo precisa ter pelo menos 3 caracteres");
      return false;
  }

  setSuccessFor(bairro);
  return true;
  
}

function inputUfCheck() {
  const ufValue = uf.value.trim();
  const re = /^[A-Z]+$/;

  if (ufValue === "" || ufValue === null || ufValue === undefined) {
      setErrorFor(uf, "Campo requerido");
      return false;
  }

  if(!re.test(ufValue) || ufValue.length < 2) {
      setErrorFor(uf, "Ex: SP");
      return false;
  }

  setSuccessFor(uf);
  return true;
}

function inputCityCheck() {
  const cityValue = city.value.trim();
  const re = /^[A-Za-záàâãéèêíïóôõöüúçñÁÀÂÃÉÈÍÏÓÔÕÖÜÚÇÑ ]+$/;

  if (cityValue === "" || cityValue === null || cityValue === undefined) {
      setErrorFor(city, "Este campo é requerido");
      return false;
  }

  if(!re.test(cityValue)) {
      setErrorFor(city, "Apenas letras e acentuações");
      return false;
  }

  setSuccessFor(city);
  return true;
};

function inputPhoneCheck() {
  const phoneValue = phone.value.trim().replace(/\D/g, "").replace("(", "").replace(")", "").replace(" ", "").replace("-", "");

  if (phoneValue === "" || phoneValue === null || phoneValue === undefined) {
      setErrorFor(phone, "Este campo é requerido");
      return false;
  }

  if (phoneValue.length < 10) {
      setErrorFor(phone, "Por favor, preencher um celular válido");
      return false;
  }

  setSuccessFor(phone);
  return true;
}

function inputEmailCheck() {
  const emailValue = email.value.trim();

  if (emailValue === "" || emailValue === null || emailValue === undefined) {
      setErrorFor(email, "Este campo é requerido");
      return false;
  }

  if (!isEmail(emailValue)) {
      setErrorFor(email, "Por favor, preencher um e-mail válido");
      return true;
  }

  setSuccessFor(email);
  return true;
}

function inputEmailConfirmCheck() {
  const emailConfirmValue = emailConfirm.value.trim();
  const emailValue = email.value.trim();

  if (emailConfirmValue === "" || emailConfirmValue === null || emailConfirmValue === undefined) {
      setErrorFor(emailConfirm, "Este campo é requerido");
      return false;
  }

  if (!isEmail(emailConfirmValue)) {
      setErrorFor(emailConfirm, "Por favor, preencher um e-mail válido");
      return true;
  }

  if(emailConfirmValue !== emailValue) {
      setErrorFor(email, "");
      setErrorFor(emailConfirm, "Este e-mail é diferente do anterior, por favor, digite o mesmo e-mail!");
      return false;
  }

  setSuccessFor(email);
  setSuccessFor(emailConfirm);
  return true;
};

function inputNumberCardCheck() {
  const numeroCValue = numeroC.value.trim().replace(" ", "").replace(" ", "").replace(" ", "");
  
  if(numeroCValue === "") {
      setErrorFor(numeroC, "Este campo é requerido");
      return false;
  } else if(numeroCValue.length < 16) {
      setErrorFor(numeroC, "Este campo precisa ter o padrão EX: 0000 0000 0000 0000");
      return false;
  }

  setSuccessFor(numeroC);
  return true;
};

function inputNameCardCheck() {
  const nomeCValue = nomeC.value.trim();

  if(nomeCValue === "") {
      setErrorFor(nomeC, "Este campo é requerido");
      return false;
  } else if (nomeCValue.length < 3) {
      setErrorFor(nomeC, "Este campo precisa ter pelo menos 3 caracteres");
      return false;
  }

  setSuccessFor(nomeC);
  return true;
};

function inputExpCCheck() {
  const expCValue = expC.value.trim();
  
  if(expCValue === "") {
      setErrorFor(expC, "Este campo é requerido");
      return false;
  }

  console.log(expCValue.length)

  if(expCValue.length < 5) {
    setErrorFor(expC, "Por favor preencher no formato EX: 12/30");
    return false;
  }

  setSuccessFor(expC);
  return true;    
}

// function selectMonthCardCehck() {
//   const expCMValue = expCM.value.trim();
  
//   if(expCMValue === "MM") {
//       setErrorFor(expCM, "Campo requerido");
//       return false;
//   }

//   setSuccessFor(expCM);
//   return true;    
// }

function inputSecurityCodeCheck() {
  const codigoSegurancaValue = codigoSeguranca.value.trim();

  if(codigoSegurancaValue === "") {
      setErrorFor(codigoSeguranca, "Este campo é requerido");
      return false;
  } else if (codigoSegurancaValue.length < 3) {
      setErrorFor(codigoSeguranca, "Este campo precisa ter pelo menos 3 caracteres");
      return false;
  }

  setSuccessFor(codigoSeguranca);
  return true;
}

function inputCheckboxCheck() {
  if(!terms.checked) {
      setErrorFor(terms, "Preenchimento obrigatório");
      return false;
  }

  setSuccessFor(terms);
  return true;
}

async function inputCheckAll() {
  const resultFecth = await inputCepCheck();

  return inputEmailCheck()
  && inputEmailConfirmCheck()
  && inputCpfCheck()
  && resultFecth
  && inputAddressCheck()
  && inputNumberAddressCheck()
  && inputUfCheck()
  && inputCityCheck()
  && inputPhoneCheck()
  && inputNameCardCheck()
  && inputNumberCardCheck()
  && inputExpCCheck()
  && inputSecurityCodeCheck()
  && inputCheckboxCheck();
};

btnSubmit.addEventListener("click", async(e) => {
  e.preventDefault();
  const inputCheckAwait = await inputCheckAll();
  
  if( inputCheckAwait === true ) {
    
    const numeroCValue = numeroC.value.trim().replace(" ", "").replace(" ", "").replace(" ", "");

    const nomeSobrenome = nomeC.value.split(' ', 1);
    nomeSobrenome.push(nomeC.value.slice(nomeSobrenome.join('').length).trim());

    const expCValue = expC.value.split("/");
    const mes = expCValue[0];
    const ano = expCValue[1];
    const codigoSegurancaValue = codigoSeguranca.value.trim();

    var cc = Iugu.CreditCard(numeroCValue, mes, ano, nomeSobrenome[0],nomeSobrenome[1], codigoSegurancaValue);

    if(cc.valid()){
      Iugu.createPaymentToken(cc, function(response) {
        if (response.errors) {
            setErrorFor(numeroC, "Dados inválidos.");
            return false;
        } else {
            const token = response.id;
            //AQUI TEMOS QUE RETIRAR DADOS ENVIADOS PARA O SV
            document.getElementById("exp_c").name = "";
            document.getElementById("cvv_c").name = "";
            document.getElementById("number_c").name = "";
            document.getElementById("tokenIugu").value = token;

            formSubmit.submit();
        }   
      });
    }else{
      setErrorFor(numeroC, "Dados incorretos do cartão de crédito");
      return false;
    }      

  }
});

function setErrorFor(input, message) {
  const inputValidation = input.parentNode;
  const small = inputValidation.querySelector("small.error");

  small.innerHTML = message;

  inputValidation.classList.remove("success");
  inputValidation.classList.add("error");
}

function setSuccessFor(input) {
  const inputValidation = input.parentNode;

  inputValidation.classList.remove("error");
  inputValidation.classList.add("success");
}


// regex de email
function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function hideCEPInputs() {
  return document.querySelectorAll(".address-verify").forEach(item => {
      item.style.display = "none";
  });
}

function showCEPInputs() {
  return document.querySelectorAll(".address-verify").forEach(item => {
      item.style.display = "block";
  });
}

function showDataCEP(results) {
  for(let key in results) {
      if(document.querySelector("#"+key)) {
          document.querySelector("#"+key).value = results[key];
      }
  }
};
