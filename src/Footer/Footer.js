import React from 'react'
import { useState } from "react";
function Footer() {
    const [email,setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email)
    }
    
    return (
    <div className='flex flex-row footer items-center justify-evenly bg-[#1A496A]' id='footer_section' >
            <div className='flex flex-col text-white' style={{"width":"360px","margin-top":"20px"}}>
                <div>
                    <h1 className=''>Cloudegic <span style={{"color": "rgb(54, 165, 244)"}}>Inc</span></h1>
                </div>
                <div className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur nibh eu dolor pellentesque, ut tempus enim porttitor. Proin dapibus mollis turpis convallis viverra. 
                </div>
                <div>
                    <h3 className=''>Join our Community</h3>
                </div>
                <div className='flex justify-evenly ml-5 text-white' style={{"width":"240px","marginLeft":"30px"}}>
                <i class="bi bi-twitter fa-2x" style={{"color":"#0085FF"}}></i>
                <i class="bi bi-facebook fa-2x"  style={{"color":"#0085FF"}}></i>
                <i class="bi bi-linkedin fa-2x"  style={{"color":"#0085FF"}}></i>
                <i class="bi bi-instagram fa-2x"  style={{"color":"#0085FF"}}></i>
                </div>
                
            </div>
            
            <div className='flex flex-col text-white ' style={{"width":"310px"}}>
                <div>
                    <h1 className='' style={{"font-size":"30px"}}>About</h1>
                </div>
                <div className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur nibh eu dolor pellentesque, ut tempus enim porttitor. Proin dapibus mollis turpis convallis viverra. 
                </div>
            </div>

            <div className='flex flex-col ' style={{"width":"310px"}}>
                <div>
                    <h1 className='text-white'  style={{"font-size":"30px"}}>Contact</h1>
                </div>
                <div className='text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur nibh eu dolor pellentesque, ut tempus enim porttitor. Proin dapibus mollis turpis convallis viverra. 
                </div>
            
            </div>

            <div className='flex flex-col ' style={{"width":"350px"}}>
                <div>
                    <h4 className='text-white' style={{"font-size":"20px"}}>Subscribe to our newsletter</h4>
                </div>
                <form onSubmit={handleSubmit}>
                <label>
                    <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail"
                    style={{"width":"250px"}}
                    />
                </label>
                <input type="submit" />
                </form>
            </div>

    </div>
  )
}

export default Footer