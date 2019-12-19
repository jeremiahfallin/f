import React from "react";

import Layout from "../components/layout";
import Artwork from "../components/Artwork";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Artwork />
  </Layout>
);

export default IndexPage;
