import React from 'react'
import Navbar from '../Navbar/Navbar'
import Navbar_bottom from '../Navbar/Navbar_bottom'
import classes from "./StocksPage.module.css"
const StocksPage = () => {
    const row = ['1','2','3','4','5','6','7','8','9']
  return (
    <>
    <div className='flex flex-col'>
        <Navbar/>
        <Navbar_bottom/>
        <div className='flex flex-row bcbr my-3'>

            <p className='py-5 text-3xl font-semibold ml-2 p-2'>Option Chain</p>
            <p className='py-5 text-xl font-normal ml-auto mr-4 my-auto'>Last login: Aug 11, 2022, 5:00 AM ET</p>
        </div>

        <input placeholder='Search' className='m-3'/>

        <div className='flex flex-row'>

            <div className={`${classes.StocksPage_Component1} flex flex-col bcbr basis-1/2`}>
                        <div className='flex flex-row m-5'>
                            <p className='my-auto mx-5 border border-3 border-black rounded'>AAPL</p>
                            <p className='flex flex-row text-lg font-semibold'>NASDAQ STOCK MARKET CURRENCY IN USD</p>
                        </div>

                        <div className='flex flex-row mx-5 px-5'>
                            <p className='flex text-3xl font-bold my-auto mr-auto ml-2'>Apple Inc</p>
                            <div className='flex flex-col mr-2'>
                                <p className='text-2xl font-bold'>$149.79</p>
                                <p>$149.79 (<span className='text-red-600 font-bold my-1'>-1.51% </span> )</p>
                            </div>
                        </div>

                        <div className='flex flex-row mx-5 px-5'>
                            <p className='text-normal mr-5 text-xl my-auto'>Expiry</p>
                            <p className='text-normal text-xl bg-gray-300 p-2'>28 Oct 2022</p>
                        </div>

                        <div className='flex flex-col'>

                                <div className='flex flex-row mx-5 justify-center'>
                                        <p className='text-2xl font-semibold'>Calls</p>
                                </div>
                                
                                <div className='flex flex-row m-5 pl-2'>
                                        <p className='flex flex-row mx-auto text-xl font-normal'>Bid</p>
                                        <p className='flex flex-row mx-auto text-xl font-normal'>Ask</p>
                                        <p className='flex flex-row mx-auto text-xl font-normal'>Strike</p>
                                </div>


                                <div class="grid grid-cols-3 m-5">

                                    {
                                        row.map(()=>{
                                        return(
                                            <>
                                            <div className='flex flex-row justify-center items-center h-auto m-0 border-2 border-black bg-sky-200'>
                                                            <div className='flex flex-col py-1'>
                                                                    <p className="text-blue-600 text-lg">5.28</p>
                                                                    <p className="text-blue-600 text-lg">x108</p>
                                                            </div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center h-auto m-0 border-2 border-black bg-sky-200'>
                                                            <div className='flex flex-col py-1'>
                                                                    <p className="text-blue-600 text-lg">5.28</p>
                                                                    <p className="text-blue-600 text-lg">x108</p>
                                                            </div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center h-auto m-0 border-2 border-black'>
                                                            <div className='flex flex-col py-1'>
                                                                    <p className='font-bold text-lg'>147</p>  
                                                            </div>
                                            </div>     
                                            </>
                                        )
                                        })
                                    }

                                </div>


                        </div>
            </div>

            <div className={`${classes.StocksPage_Component2} flex flex-col basis-1/4 `}>
                    <div className='flex flex-row'>
                            <div className='flex flex-col'>
                            <p className='text-xl font-semibold my-1'>Apple Inc</p>
                            <p>$149.79 (<span className='text-red-600 font-bold my-1'>-1.51% </span> )</p>
                            <p className='my-1'>Volume: <span className='font-semibold'>52.93K</span></p>
                            </div>
                    </div>

                    <div className='flex flex-row justify-center'>
                                    <p className='mx-4 font-bold'>Call</p>
                                    <p className='mx-4 font-bold'>Put</p>
                    </div>


                    <div className='flex flex-row'>


                                   <div className='flex flex-col font-bold ' >
                                        <p className='my-auto'>Premium</p>
                                        <p className='my-auto'>Premium %</p>
                                        <p className='my-auto'>Intrinsic</p>
                                        <p className='my-auto'>Intrinsic %</p>
                                        <p className='my-auto'>Timeval</p>
                                        <p className='my-auto'>Timeval %</p>
                                        <p className='my-auto'>Premium/Time value %</p>                             
                                        <p className='my-auto'>Expiry</p>
                                   </div>

                                   <div className='flex flex-col'>
                                        <p className={`${classes.StocksPage_Component2_values} flex flex-row my-2 justify-center items-center`}>
                                        <span>251.15 </span>
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values} flex flex-row my-2 justify-center items-center`}>
                                        <span>94.68 </span>
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row my-2 justify-center items-center`}>
                                       <span>248.58  </span> 
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row my-2 justify-center items-center`}>
                                       <span>2.569 </span> 
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row my-2 justify-center items-center`}>
                                       <span> 2.569</span> 
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row my-2 justify-center items-center`}>
                                       <span>0.97 </span> 
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row  my-2 justify-center items-center`}>
                                       <span>1.02</span> 
                                        </p>

                                        <p className={`${classes.StocksPage_Component2_values}  flex flex-row my-2 justify-center items-center`}>
                                       <span>22/11/2023</span> 
                                        </p>
                                     
                                   </div>  


                    </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default StocksPage