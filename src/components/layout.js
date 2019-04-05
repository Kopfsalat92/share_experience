import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as data from "../resources/data.json";

const blogdata = data.data;

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        blogdata
      });
    });
    console.log(blogdata);
    console.log(children);
    return (
      <>
        <Header siteTitle={"Super"} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 1
          }}
        >
          <main>{children(blogdata)}</main>
          <footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="mailto:l.doepp@googlemail.com">Leonard Doepp</a>
          </footer>
        </div>
      </>
    );
  }
}
