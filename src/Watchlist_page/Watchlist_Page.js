import React from 'react'
import Navbar from "../Navbar/Navbar"
import Navbar_bottom from '../Navbar/Navbar_bottom'
import WatchList_full from '../Watchlist/WatchList_full'

function WatchlList_Page() {
  return (
    <>
        <Navbar/>
        <Navbar_bottom/>
        <WatchList_full/>
    </>
  )
}

export default WatchlList_Page