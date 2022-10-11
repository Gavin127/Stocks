import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'

function News1() {
    const [news1,setNews1] = useState([]);
    useEffect(() => {
        axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=AUEBXZFBPLER1WG3').then((res) => {
          const ResponseNews = res.data.feed;
          setNews1(ResponseNews); 
      });
    
    },[]);

  return (

      <div className="card card-body d-flex flex-column container"  style={{"background-color":"#e3e1e1"}} >

      {               
            <>     
                          {
                            news1 && news1.slice(0, 3).map(new1=>{
                              const {title,url,time_published,summary,banner_image,topics} = new1 ;
                              
                              return(
                                <>
                                <p className='news-text-1 m-0'><b  className='m-0'>{new1.title}</b></p>
                                <p className='news-text-1 m-0'>{new1.summary}</p>
                                <hr className='my-1'></hr>
                                </>
                              )
                            }
                          )}               
            </>      
    }

    </div>

  )
}

export default News1