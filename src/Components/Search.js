import React, { useState } from "react";
import { Col, FormControl, FormGroup, Row, Button } from "react-bootstrap";

function Search({ searchText }) {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch((search) => e.target.value);
    searchText(search);
  };
  const onSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Col md={6}>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder={"Search"}
                value={search}
                onChange={onChange}
              />
            </FormGroup>
          </form>
        </Col>
      </Row>
    </>
  );
}

export default Search;
