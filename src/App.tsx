import React from 'react';
import './App.css';
import {TableContainer} from "./Component/TableContainer";


function App() {
    return (
        <div className="App">
            <div style={{height: 100, backgroundColor:"#22222222"}}> </div>
            <TableContainer/>
            <TableContainer/>
            <TableContainer/>
            <TableContainer/>
            <div style={{height: 700,backgroundColor:"#22222222"}}> </div>
        </div>
    );
}

export default App;
