import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TableComponent} from "./Component/TableComponent";

function App() {
    const dataUrl=""


    return (
        <div className="App" >



            <TableComponent dataUrl={dataUrl}/>
        </div>
    );
}

export default App;
