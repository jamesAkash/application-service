import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context/application_context";
import {
  Box,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const { status } = useGlobalContext();
  return (
    <Wrapper>
      <Typography variant="h6" fontWeight="700">
        Dashboard
      </Typography>
      <Box className="grid-it">
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4">Pending</Typography>
            <Typography
              mt={2}
              fontSize={28}
              fontWeight={600}
              variant="h6"
              letterSpacing="-1px"
              style={{ fontSize: "clamp(26px, 5vw,48px)" }}
            >
              {status.pending}
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4">Completed</Typography>
            <Typography
              mt={2}
              fontWeight={600}
              variant="h6"
              letterSpacing="-1px"
              style={{ fontSize: "clamp(26px, 5vw,48px)" }}
            >
              {status.completed}
            </Typography>
          </CardContent>
        </Card>
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4">Applied</Typography>
            <Typography
              mt={2}
              fontSize={28}
              fontWeight={600}
              variant="h6"
              letterSpacing="-1px"
              style={{ fontSize: "clamp(26px, 5vw,48px)" }}
            >
              {status.applied}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <TableDisplay />
    </Wrapper>
  );
};

const TableDisplay = () => {
  const { applications } = useGlobalContext();
  return (
    <TableContainer
      sx={{
        marginInline: "auto",
        maxWidth: "95%",
        padding: 2,
        overflowX: "auto",
      }}
      component={Paper}
      elevation={3}
    >
      <Typography variant="h5" textAlign="center" mb="20px">
        COMPLETED APPLICANTS
      </Typography>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>D.O.B</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((applicant) => {
            const { fname, dob, number, mail, gender } = applicant;
            return (
              <TableRow key={fname}>
                <TableCell>{fname}</TableCell>
                <TableCell>{dob}</TableCell>
                <TableCell>{number}</TableCell>
                <TableCell>{mail}</TableCell>
                <TableCell>{gender}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Wrapper = styled.section`
  /* background-color: #ececec; */
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 56.8px);

  .grid-it {
    padding: 20px;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    text-align: center;
    gap: 20px;
  }

  @media (max-width: 840px) {
    .grid-it {
      grid-template-columns: 1fr;
    }
  }
`;

export default Dashboard;
