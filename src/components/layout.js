import React from "react";
import Header from "./header";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as data from "../resources/data.json";
import Navi from "../pages/navi";

const blogdata = data.data;

// const nav = document.querySelector("nav");
// const navTop = nav.offsetTop;

// function handleScroll() {
//   if (window.scrollY > navTop) {
//     nav.classList.add("fixed-nav");
//     document.body.style.paddingTop = nav.offsetHeight + "px";
//   } else {
//     nav.classList.remove("fixed-nav");
//     document.body.style.paddingTop = 0;
//   }
// }

// window.addEventListener("scroll", handleScroll);

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

    return (
      <>
        <Header siteTitle={<img src="/images/Title.jpg" alt="..." />} />
        <Navi className="nav" />
        <div>
          <body
            style={{
              margin: `0 auto`,
              maxWidth: 1100,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            <main>{children}</main>
          </body>
          <footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="mailto:l.doepp@googlemail.com">Leonard Doepp</a>
            <br />
            <a href="/datenschutz/">Data protection</a>
          </footer>
        </div>
      </>
    );
  }
}
