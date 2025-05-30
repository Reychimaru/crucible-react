import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import FooterNav from "./components/navbar/FooterNav";
import HeaderNav from "./components/navbar/HeaderNav";

import Home from "./views/Home";
import Posting from "./views/Posting";
import Post from "./views/Post";

import Profile from "./views/Profile";
import Personalize from "./views/Personalize";

import Login from "./views/signing/Login";
import Recover from "./views/signing/Recover";
import Register from "./views/signing/Register";
import {Setup} from "./views/signing/Setup";
import Community from "./views/Community";
import Communities from "./views/communities/Communities";

function AppContent() {
    const location = useLocation();
    const wrapperPaths = ['/login', '/recover', '/register'];

    const isSpecialWrapper = wrapperPaths.includes(location.pathname);

    return (
        <>
            <HeaderNav />
            <div className={isSpecialWrapper ? "centerWrapper" : "wrapper"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posting" element={<Posting />} />
                    <Route path="/p/:idpost" element={<Post />} />
                    <Route path="/u/:username" element={<Profile />} />
                    <Route path="/personalize" element={<Personalize />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/recover" element={<Recover />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/setup" element={<Setup />} />

                    <Route path="/c/:id" element={<Community />} />
                    <Route path="/communities" element={<Communities />} />

                </Routes>
            </div>
            <FooterNav />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;


// u user
// p post
// c community

