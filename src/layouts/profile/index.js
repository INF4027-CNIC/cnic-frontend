// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Images
import team1 from "assets/images/team-1.jpg";

import styles from "./style.module.css"
import MDAvatar from "components/MDAvatar";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} mt={2} className={styles.profileContainer}>
        <MDAvatar 
          src={team1}
          size="xl"
        />

        <MDBox className={styles.profileInfo}>
          <MDTypography className={styles.profileName}>Kombou Dilane</MDTypography>
          <MDTypography className={styles.profileEmail}>admin@gmail.com</MDTypography>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
