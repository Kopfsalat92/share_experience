import React from "react";
import { Row, Col } from "reactstrap";
import BlogEntry from "../components/blogEntry";
import * as data from "../resources/data.json";

const blogData = data.data;

function createTable(blogData) {
  const rows = sliceArrayIntoGroups(blogData, 2);
  const content = rows.map((row, index) => (
    <Row key={index}>
      {row.map((item, idx) => (
        <Col sm="6" key={idx}>
          <BlogEntry data={item} />
        </Col>
      ))}
    </Row>
  ));
  return <div>{content}</div>;
}

function sliceArrayIntoGroups(arr, size) {
  var step = 0,
    sliceArr = [],
    len = arr.length;
  while (step < len) {
    sliceArr.push(arr.slice(step, (step += size)));
  }
  return sliceArr;
}

export default class Blog extends React.Component {
  render() {
    const table = createTable(blogData);
    return <div>{table}</div>;
  }
}
