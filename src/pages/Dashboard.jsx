import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/application_context";
import { Paper } from "@mui/material";

const Dashboard = () => {
  const { status } = useGlobalContext();
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div className="status-container">
        <Paper elevation={3} className="status pending">
          <h3>Pending</h3>
          <p>{status.pending}</p>
        </Paper>
        <div className="status applied">
          <h3>Applied</h3>
          <p>{status.applied}</p>
        </div>
        <div className="status completed">
          <h3>Completed</h3>
          <p>{status.completed}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #ececec;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 56.8px);

  .status-container {
    padding: 32px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    max-width: 700px;
    margin: 0 auto;
    /* background-color: green; */
    margin-top: 80px;
  }

  .status {
    padding: 2rem 4rem;
    border-radius: 8px;
    box-shadow: -2px 5px 12px -5px #151515;
  }

  .pending {
    background-color: #f5f0bb;
  }

  .applied {
    background-color: #b3c890;
  }
  .completed {
    background-color: #73a9ad;
  }
`;

export default Dashboard;
