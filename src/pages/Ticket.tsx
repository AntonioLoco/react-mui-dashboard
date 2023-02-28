import {
  Box,
  Container,
  Paper,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button,
  styled,
  Slide,
} from "@mui/material";

import { ticketArray } from "../chartData/ticketData";

//Import Icon
import DeleteIcon from "@mui/icons-material/Delete";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Ticket = () => {
  const MyTable = styled(Table)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: theme.palette.divider,
  }));
  return (
    <Container maxWidth="xl">
      {/* Title Ticket Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
          width: "100%",
          marginBottom: 8,
        }}
      >
        <Typography variant="h3">Ticket Box</Typography>
      </Box>

      {/* Ticket Box Table Large*/}
      <TableContainer
        component={Paper}
        sx={{ display: { xs: "none", lg: "table" } }}
      >
        <MyTable>
          <TableHead
            sx={{
              borderBottomStyle: "solid",
              borderBottomWidth: "2px",
              borderBottomColor: "divider",
            }}
          >
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Ticket ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Issue type</TableCell>
              <TableCell>Created</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketArray.map((el, index) => {
              return (
                <Slide
                  in={true}
                  direction="right"
                  timeout={parseInt(`1${index}00`)}
                >
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{el.ticketID}</TableCell>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.issueType}</TableCell>
                    <TableCell>{el.created}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: 2 }}
                      >
                        <PersonPinIcon sx={{ marginRight: 1 }} />
                        Allocate
                      </Button>
                      <Button variant="contained" color="error">
                        <DeleteIcon sx={{ marginRight: 1 }} />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </Slide>
              );
            })}
          </TableBody>
        </MyTable>
      </TableContainer>

      {/* Ticket Box Table Small*/}
      <TableContainer
        component={Paper}
        sx={{ display: { xs: "table", lg: "none" } }}
      >
        <MyTable>
          <TableHead
            sx={{
              borderBottomStyle: "solid",
              borderBottomWidth: "2px",
              borderBottomColor: "divider",
            }}
          >
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell>Issue type</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketArray.map((el, index) => {
              return (
                <Slide
                  in={true}
                  direction="right"
                  timeout={parseInt(`1${index}00`)}
                >
                  <TableRow key={index}>
                    <TableCell>{el.ticketID}</TableCell>
                    <TableCell>{el.issueType}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginBottom: 1, marginX: 1 }}
                      >
                        <PersonPinIcon sx={{ marginRight: 1 }} />
                        Allocate
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ marginBottom: 1, marginX: 1 }}
                      >
                        <DeleteIcon sx={{ marginRight: 1 }} />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </Slide>
              );
            })}
          </TableBody>
        </MyTable>
      </TableContainer>
    </Container>
  );
};

export default Ticket;
