import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Cotent} from "./components/Content/Content";

const App = () => {
    return (<div className="app-wrapper">
            <Header />
            <Navbar/>
            <Cotent/>
        </div>
    );
}

export default App;

