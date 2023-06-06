import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Wrapper>
        <h1>Logo</h1>
        <div className="link-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/apply">Apply</NavLink>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/">Verification</NavLink>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
  }

  .link-container {
    margin-top: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 90%;
    text-align: center;
  }

  .link-container > a {
    color: black;
    /* background-color: #fff; */
    margin-top: 18px;
    padding: 0.4rem;
    font-size: 16px;
    border-radius: 5px;
  }

  .link-container > a:hover {
    background-color: #85b1b1;
    color: wheat;
  }
`;

export default Sidebar;
