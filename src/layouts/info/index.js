// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import image from "assets/images/img1.jpg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import GridViewIcon from "@mui/icons-material/GridView";
import { QRCodeSVG } from "qrcode.react";
import "./styles/infoStyle.css";
import { Icon } from "@mui/material";
import { ExportContext } from "context/export";
import { useContext } from "react";
import Export from "layouts/exports";
import CitizenContext from "context/citizens";
import dayjs from "dayjs";
import { formatDate } from "utils";
import { Navigate } from "react-router-dom";

// const image= require("../info/img1.jpg")
function Info() {
  const { print, exportRef } = useContext(ExportContext);
  const { citizen } = useContext(CitizenContext);

  console.log(citizen)

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {citizen ? (
        <MDBox pt={6} pb={3}>
          <div className="infoUser-content">
            <div className="infoUser-Header">
              <div className="profil_Info">
                <img src={citizen.avatar} alt="img" className="imageProfil" />
                <div className="Userinformation">
                  <span>{ citizen.fullname }</span>
                  <span>{ citizen.birthplace }</span>
                  <span>{ formatDate(citizen.birthday) }</span>
                </div>
              </div>
              <div className="Buttons">
                <button onClick={print} className="button-Export">
                  <span> Export</span>
                  <GridViewIcon />
                </button>
                <button className="button-Edit">
                  <span> Edit</span>
                  <ModeEditIcon />
                </button>
              </div>
            </div>
            <div className="content_information">
              <div className="topElement_information">
                <div className="firstTopElt">
                  <div className="infoTitle">
                    Information personnelle
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.sex === 'male' ? "Masculin" : "Feminin" }</span>
                    <span> Sexe</span>
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.height }</span>
                    <span> Taille</span>
                  </div>
                  <div className="infoDesc">
                    <span> { citizen.profession }</span>
                    <span> Profession</span>
                  </div>
                </div>

                <div className="firstTopElt">
                  <div className="infoTitle">
                    Information supplementaires
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.fathername }</span>
                    <span> Nom du pere</span>
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.mothername }</span>
                    <span> Nom de la mere</span>
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.address }</span>
                    <span> Adresse</span>
                  </div>
                </div>
              </div>

              <div className="BottomElement">
                <div className="firstTopElt">
                  <div className="infoTitle">
                    Information complementaires
                  </div>
                  <div className="infoDesc">
                    <span>{ citizen.uniqueId }</span>
                    <span> Identifiant Unique</span>
                  </div>
                  <div className="infoDesc">
                    <span>CE02</span>
                    <span> Poste d'identification</span>
                  </div>
                  <div className="infoDesc">
                    <span>{ formatDate(citizen.deliveryDate) }</span>
                    <span> Date de delivrance</span>
                  </div>
                  <div className="infoDesc">
                    <span>{ formatDate(citizen.expirationDate) }</span>
                    <span> Date d'expiration</span>
                  </div>
                </div>

                <div className="firstTopElt">
                  <div className="infoTitle">Codes</div>
                  <QRCodeSVG
                    value={citizen.qrcode}
                    style={{ marginTop: 20, marginBottom: 10 }}
                  />
                  <div className="infoDesc">
                    <span> { citizen.numericCode } </span>
                    <span> Code Numerique</span>
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  <Export exportRef={exportRef} />
                </div>
              </div>
            </div>
          </div>
        </MDBox>
      ):(
        <Navigate to="/dashboard" />
      )}

      <Footer />
    </DashboardLayout>
  );
}

export default Info;
