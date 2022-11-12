import React from 'react';
import MyWorks from "./Pages/MyWorks";
import {myWorks} from "./utils/data";

import './App.scss'
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";

function App() {
    return (
        <div className='main'>
            <Header/>
            <MyWorks works={myWorks}/>
            <Footer/>
        </div>
    );
}

export default App;
