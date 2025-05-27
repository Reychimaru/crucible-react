import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";
import Home from "./views/Home";
import Profile from "./views/Profile";
import './App.css';

function App() {
    return (
        <Router>

            <HeaderNav></HeaderNav>
            <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            </main>
            <FooterNav></FooterNav>
        </Router>
    );
}

export default App;
