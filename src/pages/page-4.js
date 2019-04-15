import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "reactstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as data from "../resources/data.json";
//import Carousel from "../components/carousel";
// Malawi [1]
const blogdata = data.data[1];

export default class SecondPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Page four" />
        <h1 align="center">{blogdata.title}</h1>
        <p align="center">{blogdata.text2}</p>
        <Row>
          <Col xs="6">
            <img src="/images/Ma1.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/Ma2.jpg" alt="..." />
          </Col>
        </Row>
        <h2>{blogdata.headerT1}</h2>
        <p>{blogdata.infoText1}</p>
        <Row>
          <Col xs="6">
            <img src="/images/Ma3.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/Ma4.jpg" alt="..." />
          </Col>
        </Row>
        <h2>{blogdata.headerT2}</h2>
        <p>{blogdata.infoText2}</p>
        {/* <Row>
          <Col xs="6">
            <img src="/images/Ma5.jpg" alt="..." />
          </Col>
          <Col xs="6">
            <img src="/images/Ma6.jpg" alt="..." />
          </Col>
        </Row> */}
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
