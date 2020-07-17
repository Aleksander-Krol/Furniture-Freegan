import React, {Component} from "react";
import ReactDOM from "react-dom";

export const AddItem = () => {
    
    const formStyle = {
        display: "flex",
        width: "400px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #cacaca",
        borderRadius: "20px",
        padding: "40px"
    }
    
    return (
       <form style={formStyle}>
           <h1>Dodaj przedmiot</h1>
           <input type={Text} placeholder={"Nazwa rzeczy"} ></input>
           <textarea> </textarea>
           <input type={File} placeholder={"Dodaj zdjęcie"}></input>
           <button>Dodaj</button>

           
       </form>
    )
}