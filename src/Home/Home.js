import React from 'react'
import Navbar from "../Navbar/Navbar";
import Navbar_bottom from '../Navbar/Navbar_bottom';
import MainSection1 from '../Mainsection/MainSection1';
import MainList from "../Mainlist/MainList";
import Graph1 from "../Graph/Graph1";
import Graph from "../Graph/Graph";
import News from "../News/News";
import WatchList from "../Watchlist/WatchList";
import Footer from "../Footer/Footer";
import data from "./data.json"

function Home() {
  return (
    <>
   <Navbar/>
   <Navbar_bottom/>
   <MainSection1/>
   <div className="flex" id='main_box'>

      <div className="flex flex-col m-0">
      <MainList/>
      <WatchList/>
      </div>


      <div className="flex flex-col m-0">
        <div> <Graph1/> </div>
        <div> <News/> </div>
      </div>
     </div>

      <Footer/>
   </>
  )
}

export default Home