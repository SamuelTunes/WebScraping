var submitButton = document.getElementById("submitButton");
var keywordInput = document.getElementById("keywordInput");

submitButton.addEventListener("click", function() {

var keyword = keywordInput.value

// Cria um objeto XMLHttpRequest para fazer a requisição AJAX
var xhr = new XMLHttpRequest();
	
if (keyword.trim() !== "") {
        // Chame a função que faz a requisição AJAX passando a palavra-chave
        fazerRequisicao(keyword);
    } else {
        // Se o campo estiver vazio, exiba uma mensagem de erro
        alert("Por favor, digite uma palavra-chave antes de enviar.");
    }
});

// Função para fazer a requisição AJAX
function fazerRequisicao(keyword) {
    // Crie um objeto XMLHttpRequest para fazer a requisição AJAX
    var xhr = new XMLHttpRequest();

	// Configura a requisição AJAX com a palavra-chave como um parâmetro na URL
	xhr.open("GET", "http://localhost:8080/api/scrape?keyword=" + encodeURIComponent(keyword), true);


    // Define o callback a ser chamado quando a resposta da requisição estiver pronta
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            // Verifica se a requisição foi bem-sucedida
            if (xhr.status == 200) {
                // Manipula a resposta do servidor
				var products = JSON.parse(xhr.responseText);
                displayProducts(products);
                console.log(xhr.responseText);
            } else {
                // Manipula erros
                console.error('Ocorreu um erro: ' + xhr.status);
            }
        }
    }; 
	xhr.send();
}

function displayProducts(products) {
    var productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = '';

    products.forEach(function(product) {
        var productDiv = document.createElement('div');
        // Adicionando a classe .item à div
        productDiv.classList.add('item');
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>Rating: ${product.rating}</p>
            <p>Number of reviews: ${product.numReviews}</p>
            <img src="${product.imageURL}" alt="${product.title}">
        `;
        productDetails.appendChild(productDiv);
    });
}
