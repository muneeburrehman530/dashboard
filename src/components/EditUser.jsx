import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  // get data from  api
  useEffect(() => {
    axios
      .get(`http://localhost:3004/users/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3004/users/${id}`, formData)
      .then((response) => navigate("/"))
      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value })); // handle change
  };
  return (
    <Wrapper>
      <UpdateInfo>
        <h2 className="text-white text-center">Update Your Information</h2>
      </UpdateInfo>
      <Form onSubmit={handleSubmit} className="px-3">
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label className="fw-bold">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="fw-bold">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="checkbox"
            label="accept our terms and conditions"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Wrapper>
  );
};

export default EditUser;

const Wrapper = styled.div`
  width: 30vw;
  /* height: 70vh; */
  margin: 3rem auto;
  background-color: white;
  border-radius: 1.5rem;
  padding-bottom: 1.5rem;
`;

const UpdateInfo = styled.div`
  background-color: #0078f3;
  padding: 2rem 0 3rem 0;
  border-radius: 1.5rem 1.5rem 12rem 12rem;
  margin-bottom: 1rem;
`;
