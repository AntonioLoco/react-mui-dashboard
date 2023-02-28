import {
  Box,
  Button,
  Container,
  Grid,
  Grow,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Item from "@mui/material/Grid";

//Import Material Icon
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Pie Chart
import PieChart from "../components/PieChart";
import { pieData } from "../chartData/pieData";

// Bar Chart
import BarChart from "../components/BarChart";
import { barData } from "../chartData/barData";

// Doughnut Char
import DoughnutChar from "../components/DoughnutChar";
import { doughnutData } from "../chartData/doughnutData";

//Top Rapresentatives Data
import { topRapresentativesData } from "../chartData/topRapresentativesData";

//Customer Retention Char
import CustomerChart from "../components/CustomerChart";
import { customerRetentionData } from "../chartData/customerRetentionData";

const Dashboard = () => {
  const MyItem = styled(Item)(({ theme }) => ({
    maxHeight: 400,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 20,
    borderColor: theme.palette.divider,
    marginBottom: 30,
    padding: 25,
    position: "relative",
    "&::hover": {
      transform: "scale(1.5)",
    },
  }));

  const MyBoxChart = styled(Box)({
    display: "flex",
    justifyContent: "center",
  });

  return (
    <Container maxWidth="xl">
      {/* Title Dashboard */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
          width: "100%",
        }}
      >
        <Typography variant="h3">Dashboard</Typography>
        <Button
          variant="contained"
          endIcon={<FilterListIcon />}
          sx={{ borderRadius: 5 }}
        >
          Filter
        </Button>
      </Box>

      {/* Data Boxes */}
      <Grid container spacing={3} marginTop={5}>
        {/* Live ticket */}
        <Grid item xs={12} md={6} lg={4} xl={5}>
          <Grow in={true}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Live Ticket</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <Box>
                <Typography variant="h3">23</Typography>
                <Typography>Open</Typography>
              </Box>
              <Box>
                <Typography variant="h3">8</Typography>
                <Typography>Unsigned</Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  position: "absolute",
                  right: 25,
                  bottom: 25,
                  fontSize: 15,
                  padding: 1,
                }}
              >
                View All
              </Button>
            </MyItem>
          </Grow>
        </Grid>

        {/* Request this week */}
        <Grid item xs={12} md={6} lg={4} xl={5}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={500}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Request this Week</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <MyBoxChart>
                <PieChart data={pieData} />
              </MyBoxChart>
            </MyItem>
          </Grow>
        </Grid>

        {/* Response Time */}
        <Grid item xs={12} md={5} lg={4} xl={2}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={1000}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Response Time</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <Box
                textAlign={{ xs: "center", md: "start" }}
                marginBottom="15px"
              >
                <Typography variant="h3">4m</Typography>
                <Typography>7.2% vs yesterday</Typography>
              </Box>
              <Box textAlign={{ xs: "center", md: "start" }}>
                <Typography variant="h3">98%</Typography>
                <Typography>within SLA</Typography>
              </Box>
            </MyItem>
          </Grow>
        </Grid>

        {/* Customer Retention */}
        <Grid item xs={12} md={7} lg={6}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={1500}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Customer Retention</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <Box>
                <Typography variant="h3">86%</Typography>
                <Typography variant="h6">Avarage Retention</Typography>
                <MyBoxChart>
                  <CustomerChart data={customerRetentionData} />
                </MyBoxChart>
              </Box>
            </MyItem>
          </Grow>
        </Grid>

        {/* Resolution Time */}
        <Grid item xs={12} md={6} lg={6}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={2000}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Resolution Time</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <MyBoxChart>
                <BarChart data={barData} />
              </MyBoxChart>
            </MyItem>
          </Grow>
        </Grid>

        {/* Customer Satisfaction */}
        <Grid item xs={12} md={6} lg={8}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={2500}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Customer Satisfaction</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              <MyBoxChart>
                <DoughnutChar data={doughnutData} />
              </MyBoxChart>
            </MyItem>
          </Grow>
        </Grid>

        {/* Top Rapresentatives  */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in={true} mountOnEnter unmountOnExit timeout={3000}>
            <MyItem>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h6">Top Representatives</Typography>
                <Button sx={{ color: "text.primary" }}>
                  <MoreVertIcon />
                </Button>
              </Box>
              {/* Table */}
              <Table>
                {/* TableHead */}
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ticket Solved</TableCell>
                  </TableRow>
                </TableHead>
                {/* Table Body */}
                <TableBody>
                  {topRapresentativesData.map((el, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{el.name}</TableCell>
                        <TableCell align="right">{el.tickets}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </MyItem>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
