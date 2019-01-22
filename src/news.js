const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=e6afc88f46b446b2940fc03bc34ebefd";

export async function getNews(){
  let result=await fetch(url).then(response => response.json());
  return result.articles;
}
