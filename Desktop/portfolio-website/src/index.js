import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './PAGES/App/App';



export const Context = createContext()

ReactDOM.render(
    <Context.Provider value={'hiya'}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);
