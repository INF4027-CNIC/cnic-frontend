import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import { useReactToPrint } from "react-to-print";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import QRCode from "react-qr-code";
import QRCODECARD from "../../assets/images/CNIC_QRCode_Card.png";
import * as exportStyles from "./export-styles.css";

function Export({ exportRef }) {
  const formattedDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    return formattedToday;
  };

  return (
    <MDBox
      ref={exportRef}
      sx={{
        width: "60%",
        position: "absolute",
        top: 15,
        marginLeft: "5%",
        marginRight: "15%",
      }}
    >
      <MDBox>
        <MDBox className="">
          <MDTypography
            sx={{
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            This is your unique QRCode
          </MDTypography>
        </MDBox>
        {/* This will contain all the logic */}
        <MDBox
          sx={{
            position: "relative",
          }}
        >
          <MDBox
            sx={{
              borderRadius: 20,
            }}
          >
            <img src={QRCODECARD} className="export-img" />
          </MDBox>

          <MDBox
            sx={{
              position: "absolute",
              top: 10,
              left: "50%",
              textAlign: "center",
            }}
          >
            <MDTypography sx={{ fontWeight: 600, color: "#FFD700" }}>
              REPUBLIQUE DU CAMEROUN
            </MDTypography>
            <MDTypography sx={{ fontWeight: 600, color: "#FFD700" }}>
              REPUBLIC OF CAMEROUN
            </MDTypography>
          </MDBox>
          <MDBox
            sx={{
              position: "absolute",
              top: "22%",
              left: 60,
            }}
          >
            <MDTypography
              sx={{ color: "#FFFFFF", fontSize: 40, fontWeight: 500 }}
            >
              FENYEP WANGUE
            </MDTypography>
          </MDBox>
          <MDBox
            sx={{
              position: "absolute",
              bottom: "30%",
              left: 60,
            }}
          >
            <MDTypography
              sx={{ color: "#FFFFFF", fontSize: 28, fontWeight: 400 }}
            >
              872031
            </MDTypography>
          </MDBox>
          <MDBox
            sx={{
              position: "absolute",
              bottom: "15%",
              left: 60,
            }}
          >
            <MDTypography
              sx={{ color: "#FFFFFF", fontSize: 28, fontWeight: 400 }}
            >
              {formattedDate()}
            </MDTypography>
          </MDBox>

          <MDBox
            sx={{
              position: "absolute",
              top: "18%",
              // right: 50,
              right: -240,
            }}
          >
            <QRCode
              value="12345678"
              renderAs="canvas"
              style={{ padding: 10 }}
            />
          </MDBox>
        </MDBox>
      </MDBox>

      {/* <MDBox
        sx={{
          backgroundColor: "#FFFFFF",
          padding: 3,
          border: "2px solid grey",
          borderRadius: 5,
        }}
      >
        <MDBox sx={{ textAlign: "center" }}>
          <MDTypography sx={{ fontWeight: 600, color: "#FFD700" }}>
            REPUBLIQUE DU CAMEROUN
          </MDTypography>
          <MDTypography sx={{ fontWeight: 600, color: "#FFD700" }}>
            REPUBLIC OF CAMEROUN
          </MDTypography>
        </MDBox>
        <MDBox
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MDBox sx={{}}>
            <MDBox>
              <MDTypography sx={{ fontSize: 18, fontWeight: 700 }}>
                ISSUED TO
              </MDTypography>

              <MDTypography sx={{ fontSize: 16, fontWeight: 400 }}>
                Fenyep Wangue
              </MDTypography>
            </MDBox>
            <MDBox sx={{ marginTop: 3 }}>
              <MDTypography sx={{ fontSize: 18, fontWeight: 700 }}>
                NUMERIC CODE
              </MDTypography>

              <MDTypography sx={{ fontSize: 16, fontWeight: 600 }}>
                872031
              </MDTypography>
            </MDBox>
            <MDBox sx={{ marginTop: 3 }}>
              <MDTypography sx={{ fontSize: 18, fontWeight: 700 }}>
                DELIVERY DATE
              </MDTypography>

              <MDTypography sx={{ fontSize: 16, fontWeight: 600 }}>
                {formattedDate()}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox
        sx={{
          marginTop: 2,
        }}
      >
        <MDTypography
          sx={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          &copy; 2023, made with Love, by CNIC for a better web.
        </MDTypography>
      </MDBox> */}
    </MDBox>
  );
}

export default Export;
