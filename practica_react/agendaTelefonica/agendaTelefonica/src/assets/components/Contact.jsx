// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [names, setNames] = useState("");
  const [telephone, setTelephone] = useState("");
  const [image, setImage] = useState("");

  const setFormulario = async () => {
    const data = {
      names: names,
      telephone: telephone,
      image: image,
    };

    const response = await axios.post(
      "https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project",
      data
    );
    console.log(response);
  };

  return (
    <div className="content">
      <Form>
        <Form.Group className="mb-3" controlId="Names">
          <Form.Label>Names</Form.Label>
          <Form.Control
            type="Names"
            placeholder="Names"
            onChange={(e) => setNames(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Telephone">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="Telephone"
            placeholder="Telephone"
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="i"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Button variant="dark" onClick={setFormulario}>
          Submit
        </Button>
        {""}
      </Form>
    </div>
  );
};
