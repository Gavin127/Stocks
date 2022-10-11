import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function WatchList() {

    const [option,setOption] = useState("")

    function handleChange(event){
        setOption(event.target.value)
    }

  return (
    <>
    <div className='bcbr'>
        <h2 className='p-10 text-3xl font-semibold'>WatchList</h2>
        <div className='w-auto flex flex-row'>
        
            <select name='option' onChange={handleChange} defaultValue="Investements to watch" className='border-solid mx-4 pr-20'
                style={{"border":"2px solid black"}}
            >
                <option value="Chose Watch List">Investements to watch</option>
                <option value="Chose Watch List">Chose Watch List</option>
                <option value="Investments to watch ">Investments to watch </option>
                <option value="Airline">Airline</option>
                <option value="Banks">Banks</option>
                <option value="Dow">Dow</option>
                <option value="ETF ">ETF </option>
                <option value="Retails">Retails</option>
                <option value="Technology">Technology</option>
            </select>
 
          
            <a className='text-blue-600' href=''>Create now</a>
            <a className='text-blue-600' href=''>Edit</a>
        </div>

        <div id="main" class="grid grid-cols-6 justify-evenly m-4"> 
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    Symbols
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                   
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    Last Price $
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    Change $
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    Change %
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    Volume
                </div>
            </div>


            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    MSFT
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    TRADES
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                     $282.30
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                     -$3.44
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                      0.00 %
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                      65.39k
                </div>
            </div>


            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                      AAPL
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    TRADES
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                    $282.30
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                -$2.56
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                0.00 %
                </div>
            </div>
            <div className='border-solid border-2 border-sky-500 m-0'>
                <div className='p-2'>
                65.39k
                </div>
            </div>
        </div> 

        <NavLink to="./watchlist" className="mx-3 my-5">View Full WatchList</NavLink>
    </div>


            
    </>
  )
  
}


export default WatchList