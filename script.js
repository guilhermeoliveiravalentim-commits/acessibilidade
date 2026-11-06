 // Primeiro, encontramos os dois botões no HTML.
const botaoTexto = document.getElementById("botao-texto")
const botaoContraste = document.getElementById("botao-contraste")

// Quando clicar, liga ou desliga o texto maior.
botaoTexto.onclick = function () {
  const ativo = document.body.classList.toggle("texto-grande")
  botaoTexto.setAttribute("aria-pressed", ativo)

  if (ativo) {
    botaoTexto.textContent = "Texto padrão"
  } else {
    botaoTexto.textContent = "Aumentar texto"
  }
}

// usei para o botão troca as cores para aumentar o contraste.

botaoContraste.onclick = function () {
  const ativo = document.body.classList.toggle("alto-contraste")
  botaoContraste.setAttribute("aria-pressed", ativo)
}