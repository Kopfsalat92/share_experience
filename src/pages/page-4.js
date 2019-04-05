import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "reactstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import Carousel from "../components/carousel";

const FourthPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Malawi</h1>
    <p>Bla bla bla</p>
    <Row>
      <Col xs="6">
        <img src="/images/Ma1.jpg" alt="..." />
      </Col>
      <Col xs="6">
        <img src="/images/Ma2.jpg" alt="..." />
      </Col>
    </Row>
    <Link to="/">Go back to home</Link>
  </Layout>
);

export default FourthPage;
