import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { database } from "firebase";

export const AddItem = (props) => {
  console.log(props);

  const [itemName, setItemName] = useState("Item Name");

  const [itemDesc, setItemDesc] = useState("Item Description");

  const handleNameChange = (e) => {
    // console.dir(e.target);
    setItemName(e.target.value)
  };

  const handleDescChange = () => {

  };

  const handlePhotoChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const formId = uuidv4();
    const firebase = props.firebase;
    const database = firebase.database();
    firebase
      .database()
      .ref("Items/" + formId)
      .set({
        itemname: itemName,
        itemdesc: itemDesc,
        // itempic: imageUrl,
      });
  };

  const formStyle = {
    display: "flex",
    width: "400px",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #cacaca",
    borderRadius: "20px",
    padding: "40px",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit} id={"ItemForm"}>
      <h1>Dodaj przedmiot</h1>
      <input
        type="Text"
        placeholder={"Nazwa rzeczy"}
        id={"ItemName"}
        onChange={handleNameChange}
      ></input>
      <textarea
        defaultValue=""
        id={"Description"}
        onChange={handleDescChange}
      />
      <input
        type="File"
        placeholder={"Dodaj zdjęcie"}
        id={"Photo"}
        onChange={handlePhotoChange}
      ></input>
      <button type="submit" onSubmit={handleSubmit}>
        Dodaj
      </button>
    </form>
  );
};
