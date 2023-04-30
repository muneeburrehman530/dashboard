import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import userImage from "../assets/Daco_4090121.png";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // use a random number generator to generate a unique token
    const generateAuthToken = () => {
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      return token;
    };
    try {
      const response = await axios(`http://localhost:3004/users/${email}`);

      const authToken = generateAuthToken();
      setToken(authToken);
      localStorage.setItem("authToken", authToken);
      navigate("/");
      console.log(response.data); // Handle login success
    } catch (error) {
      console.error(error); // Handle login error
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <SigninWrapper>
        <h1 className="text-center text-white pb-4">Sign in</h1>
      </SigninWrapper>
      <ImageUser src={userImage} alt="user image" />
      <Form onSubmit={handleSubmit} className="px-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark fw-bold">Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <span className="mx-2 text-dark">Dont have an account</span>
        <Link to="/register" className="text-decoration-none">
          <LinkSignup> Sign up </LinkSignup>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 30vw;
  height: 70vh;
  margin: 3rem auto;
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
  border-radius: 1.5rem 1.5rem 12rem 12rem;
  margin-bottom: 1rem;
`;
const ImageUser = styled.img`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  margin-top: -75px;
  margin-left: 150px;
  background-color: #ffffff;
`;
