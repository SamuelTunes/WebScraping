const express = require ("express");
const cors = require('cors');   
const scrapeAmazon = require('./scraping');

const PORT = 8080;

const app = express();

app.use(cors());

app.listen(PORT, ()=> {
    console.log( `Running this application on the Port ${PORT}` );
});

app.get('/', (req, res) => {
    res.send('Inicio');
});

app.get('/api/scrape', async (req, res) => {
    // Extrai a palavra-chave da query string
    const keyword = req.query.keyword;

    // Aqui você pode fazer o que quiser com a palavra-chave recebida
    console.log('Palavra-chave recebida:', keyword);
    try {
        const results = await scrapeAmazon(keyword);
        res.json(results);
        console.log(results);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer scraping da Amazon' });
      }
});