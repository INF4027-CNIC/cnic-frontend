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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useCallback, useContext, useMemo } from "react";
import CitizenContext from "context/citizens";

function Dashboard() {
  // Get global state
  const { citizens } = useContext(CitizenContext);

  // Some handlers
  const { citizensMale, citizensFemale, allCitizens } = useMemo(() => {
    const citizensBySex = {
      citizensMale: {
        color: "primary",
        icon: "person",
        title: "Masculin",
        label: "hommes enrégistrés",
        data: [],
      },
      citizensFemale: { 
        color: "success", 
        icon: "person",
        title: "Feminin",
        label: "femmes enrégistrés",
        data: [] 
      },
      allCitizens: {
        color: "warning", 
        icon: "person",
        title: "Citoyens",
        label: "citoyens enrégistrés",
        data: citizens
      }
    };

    for (let citizen of citizens) {
      if (citizen.sex === "male") citizensBySex.citizensMale.data.push(citizen);
      else citizensBySex.citizensFemale.data.push(citizen);
    }

    return citizensBySex;
  }, [citizens]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color={citizensMale.color}
                icon={citizensMale.icon}
                title={citizensMale.title}
                count={citizensMale.data.length}
                percentage={{
                  color: "success",
                  amount: citizensMale.data.length,
                  label: citizensMale.label,
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color={citizensFemale.color}
                icon={citizensFemale.icon}
                title={citizensFemale.title}
                count={citizensFemale.data.length}
                percentage={{
                  color: "success",
                  amount: citizensFemale.data.length,
                  label: citizensFemale.label,
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color={allCitizens.color}
                icon={allCitizens.icon}
                title={allCitizens.title}
                count={allCitizens.data.length}
                percentage={{
                  color: "success",
                  amount: allCitizens.data.length,
                  label: allCitizens.label,
                }}
              />
            </MDBox>
          </Grid>

        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
