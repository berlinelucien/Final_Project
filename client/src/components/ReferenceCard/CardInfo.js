import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { SelectUnstyledContext } from "@mui/base";

function CardInfo({ imageUrl, alt, details, title }) {
  

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img
        style={{ height: "20rem" }}
        variant="top"
        src={imageUrl}
        alt={alt}
      />
      <Card.Body style={{ height: "15rem" }}>
        <div className="p__opensans">{title}</div>

        <Card.Text>{details}</Card.Text>

       
      </Card.Body>
    </Card>
  );
}

export default CardInfo;
