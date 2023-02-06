/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//root navigation to add citizen
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/citizen/data/authorsTableData";
import MDButton from "components/MDButton";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CitizenContext from "context/citizens";
import { useContext, useMemo } from "react";

function Citizens() {
  // Get Global state
  const { citizens, setCurrentCitizen } = useContext(CitizenContext);

  const { columns, rows } = useMemo(
    () => authorsTableData(citizens, setCurrentCitizen),
    [citizens]
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                style={{
                  flexDirection: "row",
                }}
              >
                <MDTypography variant="h6" color="white">
                  Liste des citoyens
                </MDTypography>

                <Box
                  sx={{
                    display: "flex",
                    position: "absolute",
                    right: 30,
                    top: -5,
                  }}
                >
                  <Link to="/add-citizen">
                    <MDButton
                      color="white"
                      size="sm"
                      variant="contained"
                    >
                      Enregistrer un citoyen
                    </MDButton>
                  </Link>
                </Box>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Citizens;
