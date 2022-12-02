import React, {useState} from 'react';
import MyWorks from "./Pages/MyWorks/MyWorks";
import {mySkills, topMargin} from "./data/mySkillsData";

import './App.scss'
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import {myWorksData, worksType} from "./data/myWorksData";
import Modal from "./components/Modal";

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
