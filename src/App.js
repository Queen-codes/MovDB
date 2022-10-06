import HomePage from "./components/home/HomePage";
import WatchList from "./components/watchlist/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Add from "./components/watchlist/Add";
import Watched from "./components/watchlist/Watched";
import Lists from "./components/watchlist/Lists";
import { GlobalProvider } from "./context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRatedMovies from "./components/toprated/TopRatedMovies";
import Hamburger from "./components/home/Hamburger";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <GlobalProvider>
        <ToastContainer theme="dark" autoClose={1500} />
        <Hamburger open={open} setOpen={setOpen} />
        <Router>
          <Layout open={open} setOpen={setOpen}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="watchlist" element={<WatchList />}>
                <Route path="add" element={<Add />} />
                <Route path="watched" element={<Watched />} />
                <Route path="lists" element={<Lists />} />
              </Route>
              <Route path="/rated" element={<TopRatedMovies />} />
            </Routes>
          </Layout>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
