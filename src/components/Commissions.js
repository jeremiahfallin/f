import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import styled from "styled-components";

const StyledCommissions = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 0fr;
  grid-row-gap: 30px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    grid-column: span 2;
  }
`;

const StyledContact = styled.div`
  display: grid;

  @media only screen and (max-width: 900px) {
    grid-auto-flow: row;
    row-gap: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    input,
    textarea {
      width: 200px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    textarea {
      width: 90%;
    }
  }
`;

const StyledHeader = styled.div`
  display: grid;
  font-size: 24px;
  align-self: end;
  justify-self: center;
  text-align: center;
`;

const StyledName = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
    justify-self: center;
  }
`;

const StyledEmail = styled.div`
  @media only screen and (max-width: 900px) {
    display: grid;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) {
    float: right;
  }
`;

const StyledMessage = styled.div`
  display: grid;
  @media only screen and (max-width: 900px) {
    textarea {
      justify-self: center;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 900px) {
    grid-column: span 2;
  }
`;

const Commissions = () => {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [messageHTML, setMessageHTML] = useState("");
  const templateParams = {
    to_name: "Daniella",
    email: email,
    from_name: fromName,
    message_html: messageHTML,
  };

  const onClick = () => {
    emailjs
      .send(
        "fcommissions",
        "template_hSSxSILo",
        templateParams,
        "user_i3JLBLRlPXkeWKuw92q0H"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <StyledCommissions>
      <StyledHeader>
        <strong>Requests;;</strong>
      </StyledHeader>
      <div style={{ display: "grid", gridRow: "span 2" }}>
        <form id="contact-form">
          <StyledContact>
            <StyledName>
              <input type="hidden" name="contact_number" />
              <div>
                <label>Name</label>
              </div>
              <input
                type="text"
                name="user_name"
                style={{
                  color: "rbg(0,0,0,.9)",
                  fontSize: "1em",
                  border: "2px solid palevioletred",
                  borderRadius: "3px",
                }}
                onChange={e => {
                  setFromName(e.target.value);
                }}
              />
            </StyledName>
            <StyledEmail>
              <label>Email</label>
              <div>
                <input
                  type="email"
                  style={{
                    color: "rbg(0,0,0,.9)",
                    fontSize: "1em",
                    border: "2px solid palevioletred",
                    borderRadius: "3px",
                  }}
                  name="user_email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </StyledEmail>
            <StyledMessage>
              <div>
                <label>Message</label>
              </div>
              <textarea
                name="message"
                style={{
                  color: "rbg(0,0,0,.9)",
                  fontSize: "1em",
                  border: "2px solid palevioletred",
                  borderRadius: "3px",
                }}
                rows={6}
                onChange={e => {
                  setMessageHTML(e.target.value);
                }}
              ></textarea>
              <div>
                <input
                  style={{
                    fontSize: "1em",
                    margin: "1em",
                    padding: "0.25em 1em",
                    border: "2px solid palevioletred",
                    borderRadius: "3px",
                  }}
                  type="submit"
                  value="Send"
                  onClick={e => onClick()}
                />
              </div>
            </StyledMessage>
          </StyledContact>
        </form>
      </div>
    </StyledCommissions>
  );
};

export default Commissions;
