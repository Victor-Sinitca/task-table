import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TableComponent} from "./Component/TableComponent";

function App() {
    const dataUrl = {
        headerContent: [
            "Column1",
            "Column1",
            "Column1",
            "Column1",
            "Column1",
            "Column1",
        ],
        tableContent:[

        ]

    }

    return (
        <div className="App">
            <TableComponent/>
        </div>
    );
}

export default App;
