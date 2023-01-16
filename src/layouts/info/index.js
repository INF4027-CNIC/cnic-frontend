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
import QRCode from "qrcode.react";
import "./styles/infoStyle.css";
import { Icon } from "@mui/material";
import { ExportContext } from "context/export";
import { useContext } from "react";
import Export from "layouts/exports";

// const image= require("../info/img1.jpg")
function Info() {
  const { print, exportRef } = useContext(ExportContext);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <div className="infoUser-content">
          <div className="infoUser-Header">
            <div className="profil_Info">
              <img src={image} alt="img" className="imageProfil" />
              <div className="Userinformation">
                <span>Kana Blondelle</span>
                <span> Dschang</span>
                <span> 03 oct 2000</span>
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
                  <span> Masculin</span>
                  <span> Sexe</span>
                </div>
                <div className="infoDesc">
                  <span> 1.68</span>
                  <span> Taille</span>
                </div>
                <div className="infoDesc">
                  <span> Developpeur FullStack</span>
                  <span> Profession</span>
                </div>
              </div>

              <div className="firstTopElt">
                <div className="infoTitle">
                  Information supplementaires
                </div>
                <div className="infoDesc">
                  <span> Papa Zemfack</span>
                  <span> Nom du pere</span>
                </div>
                <div className="infoDesc">
                  <span> Maman Zemfack</span>
                  <span> Nom de la mere</span>
                </div>
                <div className="infoDesc">
                  <span> Cradat</span>
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
                  <span> 201956789093244</span>
                  <span> Identifiant Unique</span>
                </div>
                <div className="infoDesc">
                  <span> CE02</span>
                  <span> Poste d'identification</span>
                </div>
                <div className="infoDesc">
                  <span> 02 juillet 2019</span>
                  <span> Date de delivrance</span>
                </div>
                <div className="infoDesc">
                  <span> 02 juillet 2029</span>
                  <span> Date d'expiration</span>
                </div>
              </div>

              <div className="firstTopElt">
                <div className="infoTitle">Codes</div>
                <QRCode
                  value="https://reactjs.org/"
                  renderAs="canvas"
                  style={{ marginTop: 20, marginBottom: 10 }}
                />
                <div className="infoDesc">
                  <span> 872031 </span>
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
      <Footer />
    </DashboardLayout>
  );
}

export default Info;
