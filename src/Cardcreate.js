import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./Cardcreate.css";
function Cardcreate({ peoples }) {
  return (
    <div className="flexContainer">
      {peoples.map((people, index) => (
        <div key={index} className="card-container">
          <Card
            className="mb-2 mt-2"
            body
            color="warning"
            outline
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={`https://picsum.photos/400`} />
            <CardBody>
              <CardTitle tag="h5">{people.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {people.role}
              </CardSubtitle>
              <CardText>
                {" "}
                {`${people.name} works as a ${people.role}. You can reach with ${people.email}`}
              </CardText>
              <Button color="warning">Edit</Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cardcreate;
