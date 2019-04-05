import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navi from "../pages/navi";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightgrey`,
      marginBottom: `1.50rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1960,
        padding: `1.50rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `darkgrey`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navi />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
