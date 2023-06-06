import React from "react";
import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h1>Menu</h1>
      <button className="btn">User</button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #27374d;
  color: #dde6ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .btn {
    padding: 0.2rem 0.6rem;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #6795d5;
    color: #ececec;
  }
`;

export default Navbar;
