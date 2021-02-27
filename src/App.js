import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Loading from "./Components/Loading";
import Photos from "./Components/Photos";
import Search from "./Components/Search";

function App() {
  // Declare Destructure variable
  const [Images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [Term, setTerm] = useState("");
  useEffect(() => {
    axios({
      url: `https://pixabay.com/api/?key=20437464-0dfda386913a3da911b8c3bc2&q=${Term}&image_type=photo&pretty=true`,
      method: "GET",
    })
      .then((res) => {
        setImages(res.data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [Term, isLoading]);
  return (
    <div className="App">
      <Container>
        <Search searchText={(text) => setTerm(text)} />
        {isLoading && <Loading />}
        {Images.length === 0 && <h1>No Image</h1>}
        <Row>
          {Images.map((image) => (
            <Col md={4}>
              <Photos image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
