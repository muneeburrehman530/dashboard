import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

import axios from "axios";
import NavbarDashboard from "../components/NavbarDashboard";
import styled from "styled-components";

const Dashboard = () => {
  const [data, setData] = useState([]); // getting data in state
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    // remove the token from state and local storage on logout
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  // fetching all the users data from the server
  const userData = async () => {
    try {
      const response = await axios.get("http://localhost:3004/users");
      console.log("response user", response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/users/${id}`);

      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
  }, []);
  // modal open for editing user data

  return (
    <div>
      <NavbarDashboard logout={handleLogout} />

      <Container>
        <Table striped bordered hover variant="dark">
          <thead className="text-center">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} className="text-center">
                  <td>{item.firstName}</td>
                  <td> {item.lastName} </td>
                  <td> {item.id} </td>
                  <td>{item.password}</td>
                  <td>
                    <Link to={`/${item.id}`} className="mx-2">
                      <Button variant="success"> View</Button>
                    </Link>

                    <Link to={`/edit/${item.id}`}>
                      <Button variant="warning" className="text-dark">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Dashboard;

const LinkColor = styled.a`
  text-decoration: none;
  color: greenyellow;
`;
