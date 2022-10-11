import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
const News = () => {

    const [news,setNews] = useState([]);
    const arr = ["a","b","c"];
    useEffect(() => {
        axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey=AUEBXZFBPLER1WG3').then((res) => {
          const ResponseNews = res.data.feed;
          setNews(ResponseNews); 

      });
    
    },[]);


    
    
    return (
          
        <div className='flex flex-col bcbr m-2'>
                  <h1 className='flex flex-row justify-center text-2xl my-3 font-bold'>NEWS</h1>
                  {news.slice(0,7).map((item) => {
                     if(item.title.length < 160 && item.banner_image)
                      return(
                        <div className='flex flex-row w-50'> 
                            <img src={item.banner_image} className="w-20 h-20" />
                            <p className=" mx-auto my-auto font-semibold text-normal" style={{"width":"30vw"}}>{item.title}</p>
                        </div>
                      )
                  })}
        </div>

    );
};

{/* <div className='flex flex-row my-0 items-center'> 
                                    <div className='flex items-center'>
                                      <img src={banner_image} className='news-image' />
                                    </div>
                                    <div className='flex flex-col w-100'>
                                        <p style={{"font-size":"10px"}}><b>{topics[0].topic}</b></p>
                                        <p style={{"font-size":"10px"}}><b className='m-0'>{title}</b></p>
                                        <p style={{"font-size":"10px"}}>{time_published.slice(0,8)}</p>
                                    </div>
                                    <hr className='m-0'></hr>
                                </div>
                                <hr className='my-0'></hr> */}


export default News





