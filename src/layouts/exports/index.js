import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import { useReactToPrint } from "react-to-print";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useRef } from "react";
import QRCode from "react-qr-code";

function Export() {
  const exportRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
    documentTitle: "Fenyep_QRCode",
  });

  return (
    <MDBox
      ref={exportRef}
      sx={{
        position: "absolute",
        top: 15,
        marginLeft: "25%",
        marginRight: "25%",
      }}
    >
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
      <MDBox
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
                {Date.now()}
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox sx={{ width: 150 }} />
          <MDBox sx={{}}>
            <QRCode
              value="https://reactjs.org/"
              renderAs="canvas"
              style={{ padding: 20 }}
            />
          </MDBox>
        </MDBox>

        <MDBox
          sx={{
            display: "flex",
            justifyContent: "center",
            right: 30,
            bottom: 30,
            border: "1px solid black",
            borderRadius: 2,
          }}
        >
          <MDButton
            onClick={handlePrint}
            color="white"
            size="sm"
            variant="contained"
          >
            <Icon fontSize="medium" color="blue">
              print
            </Icon>
            <MDTypography sx={{ fontSize: 16, marginLeft: 2 }}>
              Exporter le Code QR
            </MDTypography>
          </MDButton>
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
      </MDBox>
    </MDBox>
  );
}

export default Export;
