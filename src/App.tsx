import React from 'react';
import './App.css';
import {Header} from "./components/Header";


const App = () => {
    return (<div className="app-wrapper">
            <Header />
            <nav className="nav">
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div>
                    <a>
                        Settings
                    </a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://flamingo-anapa.ru/smt_images/header_beatch.jpg" alt="sea"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

