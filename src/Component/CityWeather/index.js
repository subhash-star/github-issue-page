import React, { useState } from "react";
import { Card, ListGroup ,ListGroupItem} from "react-bootstrap";

const CityWeather = ({res}) => {
  return (
    <Card  border="dark" className="m-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{height:60,width:60}} src={`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`} />
      <Card.Body>
        <Card.Title>{res.name}</Card.Title>
        <Card.Text>{res.weather[0].main}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Temp: {res.main.temp}</ListGroupItem>
        <ListGroupItem>humidity: {res.main.humidity}</ListGroupItem>
        <ListGroupItem>wind speed: {res.wind.speed}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default CityWeather;
