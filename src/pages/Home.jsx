import NewsCard from "../components/NewsCard";
import { useState,useEffect } from "react";
import {Everything, Searchnews} from '../services/api';
import '../css/Home.css'
function Home(){

const [newsdisplay,setnewsdisplay]=useState([]);
const [loading,setloading]=useState(true)
const [error,seterror]=useState(null)
const [search,setsearch]=useState("")
useEffect (()=>{
    const loadnews=async()=>{
          try {
        const popularnews = await  Everything();
        setnewsdisplay(popularnews);
      } catch (err) {
        console.log(err);
        seterror("Failed to load news...");
      } finally {
        setloading(false);
      }
    };

    loadnews();
  }, []);

  const handlesearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return
    if (loading) return

    setloading(true)
    try {
        const searchResults = await Searchnews(search)
        setnewsdisplay(searchResults)
        seterror(null)
    } catch (err) {
        console.log(err)
        seterror("Failed to search movies...")
    } finally {
        setloading(false)
    }
  };


    
if (loading) return <p>Loading news...</p>;
if (error) return <p>{error}</p>;

return(
  <div className="LandingPage">
<form onSubmit={handlesearch} className="searching">
  <input type="text"
  placeholder="search here"
  className="search-input"
  value={search}
  onChange={(e) =>setsearch(e.target.value)}
  />
  <button type="submit" className="button-search">Search</button>
</form>


<div className="newsgrid">
   {newsdisplay.map((news)=>
    <NewsCard news={news} key={news.url}/>)}
   
</div>
</div>
)
}

export default Home
