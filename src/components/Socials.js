import React from "react";

import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import twitch from "../assets/twitch.svg";

const Socials = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <a href={"https://www.instagram.com/princess.zelda"}>
        <img src={instagram} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
      <a href={"https://www.twitch.tv/faelight"}>
        <img src={twitch} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
      <a href={"https://www.twitter.com/faelightt"}>
        <img src={twitter} style={{ height: "32px", width: "32px" }} alt="" />
      </a>
    </div>
  );
};

export default Socials;
