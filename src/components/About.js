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
          <p>!</p>
          <p>i'll replace this with a real about after i show this to you.</p>
          <p>
            i just wanted to let you know that even though i still haven't
            joined call yet and we haven't really caught up, it means a lot to
            me that you still want to be friends and kept reaching out asking if
            i was ready yet. i would like it more if you remembered some of the
            things you tried to message me, but i know that's not really your
            thing.
          </p>
          <p>
            you still mean a lot to me and i'm glad we're talking again. thanks
            for being you.
          </p>
          <p>
            i made this for you because i was working on a similar thing for my
            stepdad and i figured this was better than sending you another
            notebook you won't use.
          </p>
        </StyledText>
      </StyledDescription>
    </StyledAbout>
  );
};

export default About;
