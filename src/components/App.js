import React, { Component, useState } from "react";
import '../styles/App.css';

const relativesin = ['Relative Aman', 'Relative Manish', 'Relative Sunny', 'Relative Khatri']
function App() {
    const myrelative = relativesin.map((ele, i) => <li key={ele + (i + 1)}>{(i + 1) + ele} </li>)
    return (
        <div><ol>Relative List{myrelative}</ol></div>
    )
}
export default App;
