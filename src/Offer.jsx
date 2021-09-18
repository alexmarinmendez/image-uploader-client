import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';

function Offer() {
    const [status, setStatus] = useState();
    const [image, setImage] = useState();
    const [categoryId, setCategoryId] = useState();
    const [from, setFrom] = useState();
    const [until, setUntil] = useState();
    const [discount, setDiscount] = useState();

    const send = event => {
        const data = new FormData();
        data.append("status", status);
        data.append("image", image);
        data.append("categoryId", categoryId);
        data.append("from", from);
        data.append("until", until);
        data.append("discount", discount);
        
        axios.post("https://pg-delsur.herokuapp.com/offers", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    return (
        <div className="App">
        <header className="App-header">
          <form action="#">
            <div className="flex">
              <label htmlFor="status">status (boolean)</label>
              <input
                type="text"
                id="status"
                onChange={event => {
                  const { value } = event.target;
                  setStatus(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="file">Image (file)</label>
              <input
                type="file"
                id="image"
                onChange={event => {
                  const file = event.target.files[0];
                  setImage(file);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="categoryId">categoryId (number)</label>
              <input
                type="text"
                id="categoryId"
                onChange={event => {
                  const { value } = event.target;
                  setCategoryId(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="from">from (date)</label>
              <input
                type="text"
                id="from"
                onChange={event => {
                  const { value } = event.target;
                  setFrom(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="until">until (date)</label>
              <input
                type="text"
                id="until"
                onChange={event => {
                  const { value } = event.target;
                  setUntil(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="discount">discount (integer)</label>
              <input
                type="text"
                id="discount"
                onChange={event => {
                  const { value } = event.target;
                  setDiscount(value);
                }}
              />
            </div>
          </form>
          <button onClick={send}>Send</button>
        </header>
        </div>
    );
};

export default Offer;