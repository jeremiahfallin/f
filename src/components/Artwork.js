import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Gallery from "react-photo-gallery";

import SEO from "../components/seo";

const StyledArtwork = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-row-gap: 30px;
  grid-template-rows: 1fr 4fr 0fr;
`;

const StyledImageContainer = styled.div`
  display: grid;
  grid-row-start: 2;
  width: 100%;
  height: 100%;
  grid-row: span 2;
  img {
    object-fit: contain;
    max-height: 100%;
    height: auto;
  }

  @media only screen and (max-width: 900px) {
    align-content: start;
  }
`;

const StyledHeader = styled.header`
  align-self: end;
  justify-self: center;
  text-align: center;
`;

const Artwork = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "artwork" } }) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
                presentationWidth
                presentationHeight
              }
            }
            sourceInstanceName
          }
        }
      }
    }
  `);

  const [imageArray] = useState(
    edges.map(i => {
      return {
        ...i,
        src: i.node.childImageSharp.fluid.src,
        width: i.node.childImageSharp.fluid.presentationWidth,
        height: i.node.childImageSharp.fluid.presentationHeight,
      };
    })
  );

  return (
    <StyledArtwork>
      <SEO title="Artwork" />
      <StyledHeader>
        <h1
          style={{
            marginBottom: 0,
            fontSize: "20px",
          }}
        >
          My heart and soul;;
        </h1>
      </StyledHeader>
      <StyledImageContainer>
        <Gallery photos={imageArray} direction="column" />
      </StyledImageContainer>
    </StyledArtwork>
  );
};

export default Artwork;
