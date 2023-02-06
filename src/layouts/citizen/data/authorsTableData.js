/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function data(citizens, setCurrentCitizen) {
  const handleClick = (id) => {
    setCurrentCitizen(id);
  };

  const Author = ({ id, image, name }) => (
    <Link to="/personal-info" onClick={() => handleClick(id)}>
      <MDBox
        display="flex"
        alignItems="center"
        lineHeight={1}
        sx={{
          "&:hover": {
            textDecoration: "none",
            cursor: "pointer",
          },
        }}
      >
        <MDAvatar src={image} name={name} size="sm" />
        <MDBox ml={2} lineHeight={1}>
          <MDTypography
            display="block"
            variant="button"
            fontWeight="medium"
          >
            {name}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Link>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: "noms et prenoms",
        accessor: "author",
        width: "45%",
        align: "left",
      },
      { Header: "fonction", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      {
        Header: "date de naissance",
        accessor: "birthday",
        align: "center",
      },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: citizens.map((citizen) => ({
      author: (
        <Author
          image={citizen.avatar}
          name={citizen.fullname}
          id={citizen.id}
        />
      ),
      function: <Job title={citizen.profession} />,
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent="activated"
            color="success"
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      birthday: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {dayjs(citizen.birthday).format("DD/MM/YYYY")}
        </MDTypography>
      ),
      action: (
        <MDTypography
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    })),
  };
}
