import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledAbout = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 0fr;
  grid-row-gap: 30px;
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 900px) {
    grid-column: span 2;
  }
`;

const StyledHeader = styled.div`
  font-size: 24px;
  align-self: end;
  justify-self: center;
`;

const StyledDescription = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    grid-row: span 2;
  }
`;

const StyledText = styled.div`
  @media only screen and (max-width: 500px) {
    width: 73%;
  }
`;

const StyledAboutImage = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
    justify-content: center;
    padding-bottom: 20px;
  }
  @media only screen and (min-width: 900px) {
    float: right;
    padding-left: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
`;

const About = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "profile-pic" } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 300, height: 400, quality: 90) {
                ...GatsbyImageSharpFixed
                aspectRatio
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledAbout>
      <StyledHeader>
        <strong>Me;;</strong>
      </StyledHeader>
      <StyledDescription>
        <StyledAboutImage>
          <Img fixed={edges[0].node.childImageSharp.fixed} alt={"me"} />
        </StyledAboutImage>
        <StyledText>
          <p>hi! my name is daniella, but most people call me dani.</p>
          <p>
            i'm a college student at SFU majoring in graphic design, and i plan
            on getting a job in merchandise when i graduate.
          </p>
          <p>
            i have this site because i'm really into digital art and i want to
            share what i make with other people. i'm always getting better at
            it, and if you want to see some of my other art pieces or commission
            me you can do that here!
          </p>
        </StyledText>
      </StyledDescription>
    </StyledAbout>
  );
};

export default About;
