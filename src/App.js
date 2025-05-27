import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Posting from "./views/Posting";
import './App.css';

function App() {
    return (
        <Router>

            <HeaderNav></HeaderNav>
            <main>
                <div className="wrapper">
                    <Routes>

                        <Route path="/" element={<Home/>}/>
                        <Route path="/user/:username" element={<Profile/>}/>
                        <Route path="/posting" element={<Posting/>}/>
                    </Routes>
                </div>
            </main>
            
            <FooterNav></FooterNav>
        </Router>
    );
}

export default App;
