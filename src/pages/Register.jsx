import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
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
    navigate("/login");
  };

  // handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Wrapper className="">
      <SigninWrapper>
        <h1 className="text-white text-center">Sign up</h1>
      </SigninWrapper>
      <Form onSubmit={handleSubmit} className="py-5 px-3">
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
          Register
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  width: 35vw;
  margin: 1rem auto;
  background-color: white;
  border-radius: 1.5rem;
`;
const LinkSignup = styled.span`
  color: #00a2ff;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
`;
const SigninWrapper = styled.div`
  background-color: #0078f3;
  padding: 2rem 0 3rem 0;
  border-radius: 1.5rem;
`;
