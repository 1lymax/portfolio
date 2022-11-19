import React from 'react';
import MyWorks from "./Pages/MyWorks";
import {mySkills, myWorks, topMargin} from "./utils/data";

import './App.scss'
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Skills from "./Pages/Skills/Skills";

function App() {
    return (
        <div className='main'>
            <Header/>
            <About/>
            <MyWorks works={myWorks}/>
            <Skills mySkills={mySkills} topMargin={topMargin}/>
            <Footer/>
        </div>
    );
}

export default App;
