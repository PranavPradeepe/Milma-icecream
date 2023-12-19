import React from 'react'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Addnew() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [rate, setRate] = useState("");
    const [image, setImage] = useState(null); // State to store the image file
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]); // Set the image file          
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("litter_box", value);
      formData.append("price", price);
      formData.append("category", category);
  
      formData.append("image", image);
  
      Axios.post("http://localhost:2319/api/info/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }) 
        .then(() => {
          console.log("data saved successfully");
          navigate("/admin");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div>
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Add New Icecram</h4>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>name:</Form.Label>
          <Form.Control
            type="text"
            id="model"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Liter</Form.Label>
          <Form.Control
            type="number"
            id="model"
            name="litter_box"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>iceCream price</Form.Label>
          <Form.Control
            type="number"
            id="model"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>category</Form.Label>
          <Form.Control
            type="text"
            id="distance"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>upload image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          submit
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Addnew