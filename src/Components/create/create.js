import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Create() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const sendDataToAPI = () => {
        axios.post('https://api.thomso.in/apiV1/assignment', {
            name,
            email,
            contact
        }).then(() => {
          navigate('/read');
        })
  }
  return (
    <div>
      <Form style={{width: '40%'}}>
        <Form.Field>
          <label>Name</label>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Contact</label>
          <input
            name="contact"
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact"
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  );
}
