import React from "react";

import Commissions from "../components/Commissions";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Commissions" />
    <Commissions />
  </Layout>
);

export default NotFoundPage;
