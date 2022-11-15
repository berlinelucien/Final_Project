import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Typography from "@mui/material/Typography";


function CardInfo({imageUrl, alt, title, details}) {


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Card.Text>{details}</Card.Text>

       
      </Card.Body>
    </Card>
  );
}

export default CardInfo;
