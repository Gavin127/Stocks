import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
import classes from "./Graph.module.css"
function Graph()  {
                
  return (

    <>

    <div className='m-0'>
        <div className='m-2 d-flex-column bcbr' style={{"width":"520px","height":"371px"}}>

                  <div className='d-flex justify-content-evenly pt-4'>
                          <div className='' >DOW</div>
                          <div className='' >NASDAQ</div>
                          <div className=''>S&P500</div>
                  </div>
                  
                  <div className='d-flex justify-content-center'>
                          <div>$33,309.51</div>
                  </div>

                  <div className='d-flex justify-content-center'>
                          <div className='' style={{"color":"#2B7A0B"}}>+535.10 (+1.63%)</div>
                  </div>

                  <div className='d-flex justify-content-center mt-2' style={{"width":"auto","height":"186px","backgroundColor":"bisque"}}>
                      graph goes here
                  </div>
        </div>

       
    </div>
    </>
  )
}

export default Graph