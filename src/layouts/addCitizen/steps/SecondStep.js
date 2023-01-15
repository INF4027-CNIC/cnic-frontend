import React from "react";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import "../styles.css"

import cloud from "../../../assets/images/icons/settings/cloud.png"

const SecondStep = (props) => {
  return (
    <div className="form">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 0.5, width: '80%' },
          // width: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
         id="outlined-basic" label="Nom complet du pere" variant="outlined" 
         value={props.dadName}
         onChange={(event)=>props.handleChangeDadName(event)}
        />
        <TextField
         id="outlined-basic" label="Nom complet de la mer" variant="outlined" 
         value={props.munName}
         onChange={(event)=>props.handleChangeMunName(event)}
        />
        <TextField
         id="outlined-basic" label="Adresse" variant="outlined" 
         value={props.adress}
         onChange={(event)=>props.handleChangeAdress(event)}
        />
      </Box>

      <div>
      <input
        accept="image/*"
        // className={classes.input}
        style={{display: "none", width: "100%"}}
        id="raised-button-file"
        multiple
        type="file"
      />
      <label htmlFor="raised-button-file">
        {/* <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button> */}
        <div
          style={{
            height: "100%",
            width: "60vh",
            display: "flex",
            // justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px dashed grey",
            backgroundColor: "#F5F5F5"


          }}
        >
          <h4 className="colorTitle">
            importer une photo
          </h4>
          <img
            src={cloud}
            alt="upload illustration"
            style={{
              height: "75px",
              width: "92px",
              marginTop: "30px",
            }}
          />
        </div>
      </label> 
      </div>

    </div>
  );
};
export default SecondStep;
