import React from 'react';
import './App.css';
import {TableContainer} from "./Component/TableContainer";

function App() {
    const dataUrl=""


    return (
        <div className="App" >
            <div style={{height:100}}>vvv</div>
            <TableContainer dataUrl={dataUrl}/>
            <div style={{height:500}}>  vvv</div>
        </div>
    );
}

export default App;
