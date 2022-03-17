import {useState, useEffect} from 'react';
import axios from 'axios';
function NewsDashboard() {
    type NewsFormat = {
      source: {
          id: String,
          name: String
      },
      author: String,
      title: String,
      description: String,
      url: String,
      urlToImage: String,
      publishedAt: String,
      content: String,
    };
    
    const [newsArray, setNewsArray] = useState<NewsFormat[]>([])
    const [newsResults, setNewsResults] =useState<Number>(0)

    const newsApi = async () => {
        try {
          const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=98d12b78cb574b75863b8267402465cf`);
          console.log(news);
          setNewsArray(news.data.articles);
          setNewsResults(news.data.totalResults);
        } catch (error) {
          console.log(error);
        }
      };
    
      /* useEffect(() => {
        newsApi();
        // eslint-disable-next-line
      }, [newsResults,newsArray]); */
    
  return (
    <div className="dashboard">
        Dashboard
    </div>
  );
}

export default NewsDashboard;