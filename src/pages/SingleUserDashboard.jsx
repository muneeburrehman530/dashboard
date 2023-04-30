import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const SingleUserDashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleSingleData = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/users/${id}`);

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // avoid side Effects

  useEffect(() => {
    handleSingleData();
  }, []);

  return (
    <div>
      <h1 className="text-center bg-white py-2">Single user Data</h1>
      <Container className="bg-info px-0">
        <div className="d-flex">
          <img
            width={"40%"}
            height={"30%"}
            src="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"
            alt="user image"
          />
          <div>
            <ListText className="list-unstyled">
              <Titletext> First Name:</Titletext> {data.firstName}
            </ListText>
            <ListText className="list-unstyled">
              <Titletext> Last Name: </Titletext> {data.lastName}
            </ListText>
            <ListText className="list-unstyled">
              <Titletext> Email: </Titletext>
              {data.id}
            </ListText>
            <ListText className="list-unstyled">
              <Titletext> Password </Titletext>
              {data.password}
            </ListText>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleUserDashboard;

const Titletext = styled.span`
  color: #ffffffee;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
`;
const ListText = styled.li`
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
`;
