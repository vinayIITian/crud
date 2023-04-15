import React, { useState,useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Update() {
    let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [ID, setID] = useState(null);

  const sendDataToAPI = () => {
    axios.put(`https://api.thomso.in/apiV1/assignment/${ID}`, {
      name,
      email,
      contact
    }).then(() => {
        navigate('/read')
    })
  };

  useEffect(() => {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setContact(localStorage.getItem('contact'));
        setID(localStorage.getItem('ID'));
  },[])
  return (
    <div>
      <Form style={{width: '40%'}}>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            value ={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value ={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Contact</label>
          <input
            name="contact"
            value ={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact"
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}
