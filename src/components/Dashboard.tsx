import { useState, useEffect } from "react";
import axios from "axios";
import {NewsFormat} from './NewsTypes';
import NewsCard from './NewsCard'
import { setAuthentication } from "./userAuth";
import {useNavigate} from 'react-router-dom';
function NewsDashboard() {

  const [newsArray, setNewsArray] = useState<NewsFormat[]>([]);
  const [newsResults, setNewsResults] = useState<Number>(0);
  const history = useNavigate();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=98d12b78cb574b75863b8267402465cf`
      );
      //console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () =>{
    setAuthentication(false);
    history('/');
  }

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, newsArray]);

  return (
    <div>    
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard">
      {newsResults &&
        newsArray.map((newsItem: NewsFormat) => (
          <NewsCard  key={newsItem.title}
          source = {newsItem.source}
          author={newsItem.author} 
          title={newsItem.title}
          description={newsItem.description} 
          url={newsItem.url}
          urlToImage={newsItem.urlToImage}
          publishedAt={newsItem.publishedAt}
          content={newsItem.content} />
        ))}
    </div>
    </div>

  );
}

export default NewsDashboard;
