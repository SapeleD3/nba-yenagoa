export function getNews() {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-21&sortBy=publishedAt&apiKey=ff5bee04c8214b358ffe9cca1e685e8f')
}

export default {
    getNews
}