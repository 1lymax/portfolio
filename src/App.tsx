import React from 'react';
import MyWorks from "./Pages/MyWorks/MyWorks";
import {mySkills, topMargin} from "./data/data";

import './App.scss'
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import {myWorksData, worksType} from "./data/myWorksData";

function App() {
    return (
        <div className='main'>
            <Header/>
            <About/>
            <MyWorks works={myWorksData} worksType={worksType}/>
            <Skills mySkills={mySkills} topMargin={topMargin}/>
            <Footer/>
        </div>
    );
}

export default App;
