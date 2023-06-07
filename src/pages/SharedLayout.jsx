import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    height: 100vh;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 0.1fr 1fr;
    background-color: #27374d;
  }
  .dashboard-page {
    background-color: #fff;
  }
`;

export default SharedLayout;
