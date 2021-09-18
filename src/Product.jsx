import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';

function Product() {
    const [name, setName] = useState();
    const [cost, setCost] = useState();
    const [capacity, setCapacity] = useState();
    const [categoryId, setCategoryId] = useState();
    const [brandId, setBrandId] = useState();
    const [packingId, setPackingId] = useState();
    const [image, setImage] = useState([]);

    const send = event => {
        const data = new FormData();
        data.append("name", name);
        data.append("cost", cost);
        data.append("capacity", capacity);
        data.append("categoryId", categoryId);
        data.append("brandId", brandId);
        data.append("packingId", packingId);
        data.append("image", image);
        
        // axios.post("https://pg-delsur.herokuapp.com/products", data)
        axios.post("http://localhost:3001/products", data)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      };

    const postMultipleFiles=(filelist) => {
        let files = [];
        for (var i=0; i<filelist.length; i++) {
            files.push(filelist[i]);
        }
        console.log(files);
        setImage(files);
        console.log(image);
    }

    return (
        <div className="App">
        <header className="App-header">
          <form action="#">
            <div className="flex">
              <label htmlFor="name">name (string)</label>
              <input
                type="text"
                id="name"
                onChange={event => {
                  const { value } = event.target;
                  setName(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="cost">cost (DOUBLE)</label>
              <input
                type="text"
                id="cost"
                onChange={event => {
                  const { value } = event.target;
                  setCost(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="capacity">capacity (INTEGER)</label>
              <input
                type="text"
                id="capacity"
                onChange={event => {
                  const { value } = event.target;
                  setCapacity(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="categoryId">categoryId (INTEGER)</label>
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
              <label htmlFor="brandId">brandId (INTEGER)</label>
              <input
                type="text"
                id="brandId"
                onChange={event => {
                  const { value } = event.target;
                  setBrandId(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="packingId">packingId (INTEGER)</label>
              <input
                type="text"
                id="packingId"
                onChange={event => {
                  const { value } = event.target;
                  setPackingId(value);
                }}
              />
            </div>
            <div className="flex">
              <label htmlFor="file">Images (max 4 files)</label>
              <input
                type="file"
                id="image" 
                multiple 
                onChange={event => {
                  const filelist = event.target.files;
                  console.log(filelist)
                  postMultipleFiles(filelist);
                }}
              />
            </div>
          </form>
          <button onClick={send}>Send</button>
        </header>
        </div>
    );
};

export default Product;