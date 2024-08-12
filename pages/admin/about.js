import React from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
  Container,
} from "reactstrap";
import Image from "next/image";

const About = () => {
  const features = [];
  return (
    <Row>
      <Card>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardTitle tag="h2" className=" p-3 mb-0">
            Welcome To Spicules Insight
          </CardTitle>
        
                <Image src="/Color logo - no background.png" alt="Logo" width={250} height={80} />
            
   
        </Container>
      </Card>
      <Container>
          <div>
            <h4>This is a CRM application for tracking your business progress</h4>
          </div>
      </Container>
    </Row>
  );
};

export default About;
