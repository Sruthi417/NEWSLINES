import { useLocation, useParams } from 'react-router-dom';
import '../css/DynamicRouter.css'

function DynamicRouter() {
  const { state } = useLocation();
  const { news } = state || {};
  const { url } = useParams(); // still available if you want

  if (!news) return <p>News not found.</p>;

  return (
    <div className="news-details">
      <h1>{news.title}</h1>
      <p>{news.source?.name} | {new Date(news.publishedAt).toLocaleDateString()}</p>
      <img src={news.urlToImage} alt={news.title} style={{ maxWidth: '100%' }} />
      <p>{news.content || news.description}</p>
      <a href={news.url} target="_blank" rel="noreferrer">Read full article</a>
    </div>
  );
}

export default DynamicRouter;
