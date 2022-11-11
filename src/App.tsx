import React from 'react';
import MyWorks from "./Pages/MyWorks";
import {myWorks} from "./utils/data";

import './App.scss'
import Footer from "./Pages/Footer";

function App() {
    return (
        <div className='main'>
            <MyWorks works={myWorks}/>
            <Footer/>
        </div>
    );
}

export default App;
