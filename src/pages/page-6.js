import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "reactstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import Carousel from "../components/carousel";

const SixthPage = () => (
  <Layout>
    <SEO title="Page five" />
    <h1>Guatemala</h1>
    <p>Bla bla bla</p>
    <Row>
      <Col xs="6">
        <img src="/images/G1.jpg" alt="..." />
      </Col>
      <Col xs="6">
        <img src="/images/G2.jpg" alt="..." />
      </Col>
    </Row>
    <Link to="/">Go back to home</Link>
  </Layout>
);

export default SixthPage;
