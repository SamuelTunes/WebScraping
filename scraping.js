const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function scrapeAmazon(keyword) {
  try {
     
    const response = await axios.get(`https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
});

    const dom = new JSDOM(response.data);
        
    const productData = [];
    
    const products = dom.window.document.querySelectorAll('.s-result-item');
    
    products.forEach(product => {
      // Extrai os detalhes do produto
      const titleElement = product.querySelector('.a-text-normal');
      const ratingElement = product.querySelector('.a-icon-star-small .a-icon-alt');
      const numReviewsElement = product.querySelector('.a-size-small .a-link-normal');
      const imageURLElement = product.querySelector('.s-image');
  
      // Verifica se o título não é 'N/A' antes de extrair seus detalhes
      if (imageURLElement && imageURLElement.getAttribute('src') !== 'N/A') {
          const title = titleElement.textContent.trim() || 'N/A';
          const rating = ratingElement ? ratingElement.textContent.trim().split(' ')[0] : 'N/A';
          const numReviews = numReviewsElement ? numReviewsElement.textContent.trim().split(' ')[0] : 'N/A';
          const imageURL = imageURLElement ? imageURLElement.getAttribute('src') : 'N/A';
  
          // Adiciona os detalhes do produto ao array productData
          productData.push({
              title: title,
              rating: rating,
              numReviews: numReviews,
              imageURL: imageURL
          });
      }
  });
  
    return productData;
  } catch (error) {
    console.error('Erro ao fazer scraping da Amazon:', error.message);
    throw error;
  }
}

module.exports = scrapeAmazon;
