import React,{useState} from 'react'
import News1 from '../News/News1'
import Portfolio from '../Portfolio/Portfolio'
import News from '../News/News';


function MainList() {
        const [portfolio,setPortfolio] = useState(0);
        const [news,setNews] = useState(0);
                function handlePortfolio()
                        {
                                setPortfolio(e => !e)
                                setNews(0)
                        }
                function handleNews()
                        {
                                setNews(e => !e)
                                setPortfolio(0)
                        }
        return (
        
                <>
                <div className='rounded-3xl bg-[#ffffff]  w-100 h-auto p-10  '>
                                <h1 className='text-4xl font-semibold m-1 py-2'>Individual Brokerage</h1>

                        <div className='flex flex-row justify-center flex-wrap text-style' aria-expanded="true">
                                <div className='flex flex-col my-2 text-normal'>
                                        <div className='ml-auto'>Net Account Value</div>
                                        <div  className='ml-auto'>Day's Gain</div>
                                        <div  className='ml-auto'>Available for Withdrawal (Cash)</div>
                                        <div  className='ml-auto'>Available for Withdrawal (Margin + Cash)</div>
                                        <div  className='ml-auto'>Margin Purchasing Power</div>
                                </div>
                                <div className='flex flex-col text-style ml-5 my-2'>
                                        <div>$12,500.00</div>
                                        <div>+$400.00 (3.5%)</div>
                                        <div>$12,500.00</div>
                                        <div>$12,500.00</div>
                                        <div>$12,500.00</div>
                                </div>
                        </div>

                        <div className='flex flex-row'>
                                <a onClick={handlePortfolio}>Portfolio</a>
                                <a onClick={handleNews}> News </a>
                        </div>
                        <div className={portfolio == 0 ? "hidden" : " "}> 
                                <Portfolio/>
                        </div>
                        <div className={news == 0 ? "hidden" : " "}> 
                                <News1/>
                        </div>

                         
                        
                 </div>
                 <div className='rounded-3xl bg-[#ffffff]  w-100 h-auto p-10  '>
                                <h1 className='text-4xl font-semibold m-1 py-2'>Futures -7328</h1>

                        <div className='flex flex-row justify-center flex-wrap text-style' aria-expanded="true">
                                <div className='flex flex-col my-2 text-normal'>
                                        <div className='ml-auto'>Net Account Value</div>
                                        <div  className='ml-auto'>Day's Gain</div>
                                        <div  className='ml-auto'>Available for Withdrawal (Cash)</div>
                                        <div  className='ml-auto'>Available for Withdrawal (Margin + Cash)</div>
                                        <div  className='ml-auto'>Margin Purchasing Power</div>
                                </div>
                                <div className='flex flex-col text-style ml-5 my-2'>
                                        <div>$12,500.00</div>
                                        <div>+$400.00 (3.5%)</div>
                                        <div>$12,500.00</div>
                                        <div>$12,500.00</div>
                                        <div>$12,500.00</div>
                                </div>
                        </div>

                        <div className='flex flex-row'>
                                <a onClick={handlePortfolio}>Portfolio</a>
                                <a onClick={handleNews}> News </a>
                        </div>
                        <div className={portfolio == 0 ? "hidden" : " "}> 
                                <Portfolio/>
                        </div>
                        <div className={news == 0 ? "hidden" : " "}> 
                                <News1/>
                        </div>

                         
                        
                 </div>


                 
                 
                        

                        </>
                        
               

    
    
  )
}

export default MainList