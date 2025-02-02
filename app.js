// Array para armazenar os nomes dos amigos
let amigos = [];

// Adiciona o evento de clique ao botão "Adicionar"
document.getElementById("btnAdicionar").addEventListener("click", adicionarAmigo);

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nome = document.getElementById("nomeAmigo").value;

    // Validação para verificar se o campo está vazio
    if (nome.trim() === "") {
        // Exibe um alerta caso o campo esteja vazio
        alert("Por favor, insira um nome.");
    } else {
        // Se o nome for válido, adiciona ao array de amigos
        amigos.push(nome);

        // Atualiza a lista de amigos na página
        atualizarLista();

        // Limpa o campo de entrada
        document.getElementById("nomeAmigo").value = "";
    }
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    // Captura o elemento da lista
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizá-la
    lista.innerHTML = "";

    // Cria um item de lista para cada amigo no array
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        // Se não houver amigos, exibe uma mensagem
        document.getElementById("resultado").innerHTML = "Não há amigos para sortear!";
    } else {
        // Gera um índice aleatório entre 0 e o tamanho do array - 1
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtém o nome sorteado usando o índice aleatório
        let amigoSorteado = amigos[indiceAleatorio];

        // Exibe o amigo sorteado
        document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + amigoSorteado;
    }
}
