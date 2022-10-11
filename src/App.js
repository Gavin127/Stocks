import "./index.css"
import Home from "./Home/Home"
import { Route, Routes } from "react-router-dom";
import WatchList_Page from "./Watchlist_page/Watchlist_Page";
import Graph2 from "./Graph/Graph2";
import StocksPage from "./StocksPage/StocksPage";


function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/watchlist" element={<WatchList_Page/>} />
       <Route path='/graph' element={<Graph2/>} />
       <Route path='/stockspage' element={<StocksPage/>} />
    </Routes>
  );
       
}

export default App;
