import React, { useContext, useState } from "react";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import axios from "axios";
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";
const Home = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast.error(error.message, { type: "error" });
    }
  };

  //PUT Anypage behind login
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <Button onClick={fetchDetails} color="primary">Fetch User</Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
