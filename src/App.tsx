import React, {useState} from 'react';

import './App.scss'
import Modal from "./components/Modal";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Skills from "./Pages/Skills/Skills";
import MyWorks from "./Pages/MyWorks/MyWorks";
import {mySkills, topMargin} from "./data/mySkillsData";
import {myWorksData, worksType} from "./data/myWorksData";

function App() {
    const [modalId, setModalId] = useState(0);

    return (
        <div className='main'>
            <Header/>
            <About/>
            <MyWorks works={myWorksData} worksType={worksType} setModalId={setModalId}/>
            <Skills mySkills={mySkills} topMargin={topMargin}/>
            <Footer/>
            <Modal workId={modalId} setModalId={setModalId} show={!!modalId}/>

        </div>
    );
}

export default App;
