const areaDoCodigo = document.querySelector('.codigo')
const linguagem = document.querySelector('.selectLinguagem')
const botaoPreview = document.querySelector('.botaoVisualizar')

const tituloProjeto = document.querySelector('.inputNomeProjeto')
const descricaoProjeto = document.querySelector('.inputDescricao')
const botaoSalvar = document.querySelector('.botaoSalvar')

const inputColor = document.querySelector('[data-color]');

const iconeMenu = document.querySelector('#menu-icon')

const botaoTeste = document.querySelector('.botaoTeste')
const botaoTxt = document.querySelector('.botaoTxt')

inputColor.addEventListener('input', (evento) => {

  evento.preventDefault();
  const valor = inputColor.value;
  document.getElementById('quadroColor').style.backgroundColor = valor;
})

function mudaLinguagem() {
  const codigo = areaDoCodigo.querySelector('code').innerText
  areaDoCodigo.innerHTML = `<code class="fonteCodigo hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
  areaDoCodigo.firstChild.innerText = codigo
}

linguagem.addEventListener('change', () => {
  mudaLinguagem()
})

botaoPreview.addEventListener('click', () => {
  const codigo = areaDoCodigo.querySelector('code')
  hljs.highlightBlock(codigo)
})

botaoSalvar.addEventListener('click', () => {
  if (typeof(Storage) !== "undefined") {
      console.log('Yay, support!')
      const projeto = montaProjeto()
      salvaLocalStorage(projeto)      
  } else {
      console.log('Nay, no support!')
  }
})

function montaProjeto() {
  let projeto = {
    'id': localStorage.length,
    'detalhesDoProjeto': {
      'nomeDoProjeto': tituloProjeto.value,
      'descricaoDoProjeto': descricaoProjeto.value,
      'linguagem': linguagem.value,
      'codigo': areaDoCodigo.querySelector('code').innerText,
      'cor': document.querySelector('[data-color]').value
    }
  }
  return projeto
}

function salvaLocalStorage(objetoJson) {
  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))

  $("#ModalSalvo").modal('show');
  $(".fonteCodigo").contents().remove();
  $(".inputNomeProjeto").val('');
  $(".inputDescricao").val('');
}


iconeMenu.addEventListener('click', () => {
  const body = document.querySelector('.menuHamburguer')
  body.classList.toggle('show')
})



botaoTeste.addEventListener('click', () => {
  const canvas = document.querySelector(".quadro");
  console.log('click');
  domtoimage.toBlob(canvas)
  .then(function(blob){
    saveAs(blob, "code.png");
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
});

botaoTxt.addEventListener('click', () => {
  console.log('click');
  const codigo = areaDoCodigo.querySelector('code').innerText
  var blob = new Blob([codigo], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "code.txt");
});


// domtoimage.toPng(canvas)
// .then(function (dataUrl) {
//   var img = new Image();
//   img.src = dataUrl;
//   //document.body.appendChild(img);
// })