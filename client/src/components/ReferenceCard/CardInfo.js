import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Typography from "@mui/material/Typography";



function CardInfo(props) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imageUrl} alt={props.alt} />
      <Card.Body>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>

        <Card.Text>{props.details}</Card.Text>
    

      </Card.Body>
    </Card>
  );
}

export default CardInfo;
