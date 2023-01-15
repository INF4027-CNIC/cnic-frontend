import React from "react";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputTextUI from "./utils/InputTextUI";
import "../styles.css"

const FirstStep = (props) => {
  return (
    <div className="form">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '80%' },
          // width: '100%',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className="textField" id="outlined-basic" label="noms" variant="outlined" />
        <TextField className="textField" id="outlined-basic" label="prenoms" variant="outlined" />
        <TextField className="textField" id="outlined-basic" label="date de naissance" variant="outlined" />
        <TextField className="textField" id="outlined-basic" label="lieu de naissance" variant="outlined" />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { marginBlock: 1, width: '100%' },
          // width: '100%',
          // marginLeft: "50px"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField className="textField" id="outlined-basic" label="sexe" variant="outlined" />
        <TextField className="textField" id="outlined-basic" label="taille" variant="outlined" />
        <TextField className="textField" id="outlined-basic" label="proffession" variant="outlined" />
      </Box>

    </div>
  );
};
export default FirstStep;
