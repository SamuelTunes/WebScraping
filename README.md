# Web Scraping na Amazon

Este projeto consiste em um aplicativo de web scraping na Amazon, onde você pode inserir uma palavra-chave, clicar em um botão e receber uma lista dos itens encontrados na primeira página de resultados da pesquisa correspondente.

## Funcionalidades

- **Pesquisa na Amazon**: Insira uma palavra-chave e clique em "To send" para realizar uma pesquisa na Amazon.
- **Listagem de Itens**: Os itens da primeira página de resultados da pesquisa são exibidos, incluindo o título do item, o rating, a quantidade de reviews e a imagem.

## Como usar

Siga estas etapas para usar o aplicativo:

1. Clone este repositório para o seu computador local:

```
git clone <URL do repositório>
```

2. Instale as dependências do projeto usando o npm:

```
npm install
```

3. Inicie o servidor local, este comando pode ser usado apenas nesse projeto pois já foi configurado. Ele funciona de forma para que não precise ficar iniciando o server a cada alteração do código. Ao detectar que o cóidigo foi alterado o server 'restart' sozinho.

```
npm run dev
```

4. Abra o arquivo `index.html` em um navegador da web.

5. Insira uma palavra-chave na caixa de entrada e clique no botão "To send".

6. Aguarde a resposta do servidor e visualize os resultados na página.

## Dependências

O projeto utiliza as seguintes dependências:

- **axios**: Para fazer requisições HTTP ao servidor.
- **express**: Para criar o servidor HTTP.
- **jsdom**: Para analisar e manipular o HTML da página da Amazon.
- **cors**: Para permitir requisições entre diferentes origens (CORS).

```
npm install axios express jsdom cors
```
Certifique-se de que o Node.js está instalado em seu sistema antes de executar o projeto.

## Versões
node : v20.12.2
npm : 10.5.0
