import React from "react";
//import { Link } from "gatsby";
import Blog from "../components/blog";
import Carousel from "../components/carousel";
import Layout from "../components/layout";
//import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 align="center">Welcome on the N°1 page for sharing experiences!</h1>
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
