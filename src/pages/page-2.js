import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Col, Row } from "reactstrap";

const SecondPage = ({ blogdata }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>{this.props.blogdata[0].title}</h1>
    <p>this.state.data[0].text}</p>
    <Row>
      <Col xs="6">
        <img src="/images/G1.jpg" alt="..." />
      </Col>
      <Col xs="6">
        <img src="/images/G2.jpg" alt="..." />
      </Col>
    </Row>
    <h1>this.props.data[0].headerT1}</h1>
    <p>this.props.data[0].infoText1}</p>
    <Row>
      <Col xs="6">
        <img src="/images/G3.jpg" alt="..." />
      </Col>
      <Col xs="6">
        <img src="/images/G4.jpg" alt="..." />
      </Col>
    </Row>
    <h1>this.props.data[0].headerT2}</h1>
    <p>this.props.data[0].infoText2}</p>
    <h1>this.props.data[0].headerT3}</h1>
    <p>this.props.data[0].infoText3}</p>
    <h1>this.props.data[0].headerT3}</h1>
    <p>this.props.data[0].infoText3}</p>
    <Link to="/">Go back to home</Link>
  </Layout>
);

export default SecondPage;
