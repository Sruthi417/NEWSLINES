const Api_Key = import.meta.env.VITE_NEWS_API_KEY;
const Base_Url="https://newsapi.org/v2"

export const Everything=async()=>{
    const response= await fetch (`${Base_Url}/everything?q=bitcoin&apiKey=${Api_Key}`);
    const data= await response.json();
    return data.articles;
}
export const Searchnews=async(search)=>{
    const response=await fetch(`${Base_Url}/everything?q=${encodeURIComponent(search)}&apiKey=${Api_Key}`
);
    const data = await response.json();
    return data.articles;
}