import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';

//Based on: 
//Repo => https://github.com/Musawirkhann/Nodejs_Mongodb_Express_Multer
//Video => https://www.youtube.com/watch?v=JwGcP5RcgQg

function Product() {
    const [name, setName] = useState();
    const [cost, setCost] = useState();
    const [capacity, setCapacity] = useState();
    const [categoryId, setCategoryId] = useState();
    const [brandId, setBrandId] = useState();
    const [packingId, setPackingId] = useState();
    const [multipleFiles, setMultipleFiles] = useState([]);

    const MultipleFileChange = (e) => {
      setMultipleFiles(e.target.files);
    }

    const getMultipleFilesList = async () => {
      try {
          const fileslist = [];
          setMultipleFiles(fileslist);
          console.log(multipleFiles);
      } catch (error) {
        console.log(error);
      }
    }

    const multipleFilesUpload = async (data) => {
      try {
          // await axios.post("http://localhost:3001/products", data);
          await axios.post("https://pg-delsur.herokuapp.com/products", data);
      } catch (error) {
          throw error;
      }
    }

    const UploadMultipleFiles = async () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('cost', cost);
      formData.append('capacity', capacity);
      formData.append('categoryId', categoryId);
      formData.append('brandId', brandId);
      formData.append('packingId', packingId);
      for (let i = 0; i < multipleFiles.length; i++) {
          formData.append('image', multipleFiles[i]);                      
      }
      await multipleFilesUpload(formData);
      getMultipleFilesList();
    }

    useEffect(() => {
      getMultipleFilesList();
    }, []);

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
              <label htmlFor="file">Images (4 files max)</label>
              <input
                type="file"
                id="image" 
                multiple 
                onChange={(e) => MultipleFileChange(e)}
              />
            </div>
          </form>
          <button onClick={() => UploadMultipleFiles()}>Send</button>
        </header>
        </div>
    );
};

export default Product;