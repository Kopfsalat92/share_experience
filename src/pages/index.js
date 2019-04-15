import React from "react";
import Blog from "../components/blog";
import Carousel from "../components/carousel";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./design.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 align="center">Welcome to the N°1 platform for sharing experiences!</h1>
    <Carousel />
    <p>
      You are welcome to leave your unique trip with detailed information for
      other travelers here. We welcome you to share your insides of each hidden
      spot on our wonderful planet. Advise others to overcome challenges and
      make experiences even more memoriable.
    </p>

    <Blog />
  </Layout>
);

export default IndexPage;
