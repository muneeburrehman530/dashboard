import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  // posting data to the server using axios

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3004/users",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      password: "",
    });
    navigate("/");
  };

  // handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <Wrapper className="form-wrapper">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
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
            Add User
          </Button>
        </Form>
      </Wrapper>
    </div>
  );
};

export default SignupModal;

const Wrapper = styled.div`
  width: 40vw;
  margin: 3rem auto;
`;
