function esconderElementos() {
  const msgOutput = document.getElementById("msg-output");
  const imgOutput = document.getElementById("imagem-notfound");
  const titulo = document.getElementById("titulo-notfound");
  const paragrafo = document.getElementById("paragrafo");

  imgOutput.style.display = "none";
  titulo.style.display = "none";
  paragrafo.style.display = "none";
  msgOutput.style.display = "none";
}

function criptografar() {
  let content = capturarInput();
  validarEntrada(content);
  let msgCriptografada = content
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  console.log(msgCriptografada);
  esconderElementos();
  exibirMsg(msgCriptografada);
}

function descriptografar() {
  let content = capturarInput();
  validarEntrada(content);
  let msgDescriptografada = content
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(msgDescriptografada);
  esconderElementos();
  exibirMsg(msgDescriptografada);
}

function capturarInput() {
  let textarea = document.getElementById("textarea");
  let textareaContent = textarea.value;
  return textareaContent;
}

function copiar(msg) {
  navigator.clipboard.writeText(msg);
}

function exibirMsg(msg) {
  const copyBtn = document.getElementById("copyBtn");
  const msgOutput = document.getElementById("msg-output");
  msgOutput.textContent = msg;
  msgOutput.style.display = "block";
  copyBtn.style.display = "block";
  copyBtn.onclick = copiar(msg);
}

function validarEntrada(entrada) {
  const warnMsg = document.getElementById("warn-msg");
  const regex = /^[a-z ]+$/;
  if (regex.test(entrada)) {
    warnMsg.style.color = "green";
  } else {
    warnMsg.style.color = "red";
  }
}
