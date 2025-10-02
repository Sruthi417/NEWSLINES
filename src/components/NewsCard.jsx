import { Link } from 'react-router-dom'
import '../css/NewsCard.css'
function NewsCard({news}){
    return(
        <Link to={`/news/${encodeURIComponent(news.url)}`} 
        state={{ news }}  
        style={{ textDecoration: 'none' }}>
            <div className="newscard-poster">
            <img src={news.urlToImage} alt={news.title}/>
            <div className="newscard-content">
             <h3>{news.title}</h3>
            <p>{news.source?.name} | {new Date(news.publishedAt).toLocaleDateString()}</p>
            </div>
            </div>
        
        </Link>
    )
}

export default NewsCard