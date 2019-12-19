import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import "./layout.css";

const StyledLayout = styled.div`
  display: grid;
  font-family: Merriweather, sans-serif;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 3fr 0fr;
    grid-column-gap: 30px;
    width: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) {
    grid-template-columns: 4fr 9fr 3fr;
    grid-column-gap: 50px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <Sidebar />
        <main>{children}</main>
      </StyledLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
