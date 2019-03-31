import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { InputBtn } from "../theme/button";

const SignupForm = styled.div`
  padding: 10px;
  input {
    padding: 10px;
  }
`;

function Mailchimp(props) {
  const [email, setEmail] = useState("");

  const handleInput = e => {
    setEmail(e.target.value);
  };

  return (
    <SignupForm id="mc_embed_signup">
      <form
        action="https://globaltechchallenge.us20.list-manage.com/subscribe/post?u=4fccb3f10f3b88d17dd5fcfd3&amp;id=4ec5b2f1b7"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter your email*"
              value={email}
              onChange={handleInput}
            />
            <div>
              <InputBtn
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_4fccb3f10f3b88d17dd5fcfd3_4ec5b2f1b7"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
        </div>
      </form>
    </SignupForm>
  );
}

export default Mailchimp;
