import React from "react";
import { Card, Badge, Row, Col, Image } from "react-bootstrap";
import { FaHashtag, FaThumbsUp,FaUser,FaRegCommentDots } from "react-icons/fa";
import { AiFillEye, AiOutlineCloudDownload } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";

function Photos({ image }) {
  const tags = image.tags.split(",");
  return (
    <>
      <Card style={{ margin: "10px 0px" }}>
        <Card.Img variant="top" src={image.webformatURL} />
        <Card.Body>
          <Row className={"d-flex justify-content-between w-100"}>
            <Col md={6} style={{borderRight :'1px solid black'}}>
              <p>
                <AiFillEye /> {image.views}
              </p>
              <p>
                <FaThumbsUp /> {image.likes}
              </p>
              <p>
                <AiOutlineCloudDownload /> {image.likes}
              </p>
            </Col>
            <Col md={6}>
              {/* <Image
                src={image.userImageURL}
                roundedCircle
                style={{ width: "50px",float:'right' }}
              /> */}
            <p><FaUser /> {image.user}</p>
            <p><FaRegCommentDots /> {image.comments}</p>
            <p><GrFavorite /> {image.favorites}</p>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          {tags.map((tag, index) => (
            <span key={index} style={{ margin: "4px" }}>
              <Badge variant="light">
                <FaHashtag /> {tag}
              </Badge>
            </span>
          ))}
        </Card.Footer>
      </Card>
    </>
  );
}

export default Photos;
