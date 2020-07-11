import React, {Component} from "react";
import ReactDOM from "react-dom";

export const AddItem = () => {
    return (
       <form>
           <h1>Dodaj przedmiot</h1>
           <input type={Text} placeholder={"Nazwa rzeczy"} ></input>
           <textarea> </textarea>
           <input type={File} placeholder={"Dodaj zdjęcie"}></input>
           <button>Dodaj</button>

           
       </form>
    )
}