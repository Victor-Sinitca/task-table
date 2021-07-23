import React from 'react';
import './App.css';
import {TableContainer} from "./Component/TableContainer";

function App() {
    const dataUrl=""


    return (
        <div className="App" >
            <div style={{backgroundColor:"blue", height:500}}>
                CCCC
            </div>
            <TableContainer dataUrl={dataUrl}/>
        </div>
    );
}

export default App;
