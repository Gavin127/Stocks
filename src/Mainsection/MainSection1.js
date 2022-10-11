import React from 'react'
import classes from "./Mainsection.module.css"
import dollar from "../assets/dollar.svg"
import chip from "../assets/chip.svg"
import visa from "../assets/visa.svg"

function MainSection1() {
    
  return (
    <div className='flex flex-row bg-[#ffffff] w-full shadow-1xl rounded-3xl items-center justify-center my-3 py-2'>

            <div className='flex flex-col mx-auto'>
                <h1 className='text-4xl font-extrabold font-montserrat mx-auto my-3'>Welcome Parth</h1>
                <span className='text-xl font-medium'>Last login: Aug 11, 2022, 5:00 AM ET</span>
            </div>

            <div className='flex flex-col mx-auto'>
                <h1 className='text-2xl my-3'>Total Assets:  $12,500.00</h1>
                <span className='text-2xl '>Day's Gain: + $400.00</span>
            </div>

            <div className={`${classes.card1} mx-auto`}>
                        <div className='flex flex-row m-3'>
                                <img src={dollar}
                                     className="border-solid border-2 border-white-500 p-2 my-auto h-10 mr-3"
                                />
                                <p className='my-auto font-inter text-white'>
                                    USD
                                </p>

                                <div className='ml-auto'>
                                    <img src={chip} />
                                    
                                </div>
                        </div>

                        <div className='text-3xl text-white font-inter ml-5 font-bold'>
                            <p>
                            $12500
                            </p>
                        </div>
                        
                        <div className='text-2xl text-green font-inter ml-5 font-extrabold '
                              style={{"color":"#4BFF0C"}}>
                            <p className='ml-5 '>
                              $400
                            </p>
                        </div>
                        
                        <div className='flex flex-row m-3'>
                                <p className='text-sm my-auto text-white font-inter'>Card Holder :</p>
                                <p className='my-auto ml-2 text-white font-inter font-bold'>PARTH</p>
                                <img  className='ml-auto'
                                src={visa} />
                                
                        </div>
            </div>

            
    </div>
  )
}

export default MainSection1