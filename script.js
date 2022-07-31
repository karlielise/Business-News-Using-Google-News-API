const articleContainer = document.querySelector(".grid");

document.addEventListener("DOMContentLoaded", () => {
    fetchAPI()
})

async function fetchAPI() {
    const base_url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="use your own api key from google news api"`;
    const response = await fetch(base_url);
    const data = await response.json();
    displayArticles(data.articles)
    console.log(data.articles);
}

function displayArticles(results) {
    let generatedArticles = '';
    results.map((result) => {
        generatedArticles += `
        <div class="grid-item">
        <div class="card">
          <img class="card-img" src=${result.urlToImage} alt="Rome" />
          <div class="card-content">
            <h1 class="card-header">${result.source.name}</h1>
            <p class="card-text">
              ${result.title}
            </p>
            <a href=${result.url} class="card-btn">Visit <span>&rarr;</span></a>
          </div>
        </div>
      </div>`
    })
    articleContainer.innerHTML = generatedArticles
}
