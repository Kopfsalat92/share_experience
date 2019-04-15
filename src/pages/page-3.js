import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "reactstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as data from "../resources/data.json";
//import Carousel from "../components/carousel";
// Tanzania [5]

const blogdata = data.data[5];

export default class SecondPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Page three" />
        <h1 align="center">{blogdata.title}</h1>
        <p align="center">{blogdata.text2}</p>
        <Row>
          <Col xs="6">
            <img src="/images/T1.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/T2.jpg" alt="..." />
          </Col>
        </Row>
        <h2>{blogdata.headerT1}</h2>
        <p>{blogdata.infoText1}</p>
        <Row>
          <Col xs="6">
            <img src="/images/T3.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/T4.jpg" alt="..." />
          </Col>
        </Row>
        <h2>{blogdata.headerT2}</h2>
        <p>{blogdata.infoText2}</p>
        <Row>
          <Col xs="6">
            <img src="/images/T5.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/T6.jpg" alt="..." />
          </Col>
        </Row>
        <h2>{blogdata.headerT3}</h2>
        <p>{blogdata.infoText3}</p>
        {/* <Row>
          <Col xs="6">
            <img src="/images/G7.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/G8.jpg" alt="..." />
          </Col>
        </Row> */}
        <h2>{blogdata.headerT4}</h2>
        <p>{blogdata.infoText4}</p>
        <Link to="/">Go back to home</Link>
      </Layout>
    );
  }
}
