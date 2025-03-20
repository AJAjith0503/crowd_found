import React from "react";
import { AppBar, Toolbar, Box, Button, Grid } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Creators from "./Creators";
import Projects from "./Projects";

export default function Home() {
  let history = useHistory();

  return (
    <React.Fragment>
      {/* Navbar with Gradient Background */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, #3A0CA3, #7209B7)",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo Section */}
            <Grid item>
              <Button
                sx={{
                  fontSize: "1.3rem",
                  color: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                startIcon={<CurrencyExchangeIcon />}
              >
                Fundify
              </Button>
            </Grid>

            {/* Navigation Links */}
            <Grid item>
              <Button
                onClick={() => history.push("/home/creators")}
                sx={{
                  marginX: 2,
                  color: "white",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backdropFilter: "blur(5px)",
                  background: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { background: "rgba(255, 255, 255, 0.3)" },
                }}
              >
                Explore Creators
              </Button>

              <Button
                onClick={() => history.push("/home/projects")}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backdropFilter: "blur(5px)",
                  background: "rgba(255, 255, 255, 0.2)",
                  "&:hover": { background: "rgba(255, 255, 255, 0.3)" },
                }}
              >
                Discover Projects
              </Button>
            </Grid>

            {/* Signup & Login Buttons */}
            <Grid item>
              <Button
                onClick={() => history.push("/signupcreator")}
                sx={{
                  backgroundColor: "#F4A261",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  marginRight: 1,
                  padding: "10px 20px",
                  "&:hover": { backgroundColor: "#E76F51" },
                }}
              >
                Sign up as Creator
              </Button>
              <Button
                onClick={() => history.push("/login")}
                sx={{
                  backgroundColor: "#2A9D8F",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  "&:hover": { backgroundColor: "#1D7874" },
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Page Routes */}
      <Box sx={{ marginTop: "80px", padding: "20px" }}>
        <Switch>
          <Route path="/home/creators">
            <Creators />
          </Route>
          <Route path="/home/projects">
            <Projects />
          </Route>
        </Switch>
      </Box>
    </React.Fragment>
  );
}
