import React, { useEffect } from "react";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputTextUI from "./utils/InputTextUI";
import "../styles.css"

const FirstStep = (props) => {

  // const handleChange = (event) => {
  //   setName(event.target.value);
  //   console.log(props.names)
  // };
 useEffect(()=>{ console.log(props.names)},[props.names])

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
        <TextField 
          className="textField" 
          id="outlined-basic" 
          label="noms" 
          variant="outlined" 
          value={props.names}
          onChange={(event)=>props.handleChangeName(event)}
        />
        <TextField 
          className="textField" 
          id="outlined-basic" 
          label="prenoms" 
          variant="outlined" 
          value={props.surName}
          onChange={(event)=>props.handleChangeSurName(event)}
        />
        <TextField 
          className="textField" id="outlined-basic" label="date de naissance" variant="outlined" 
          value={props.birthDay}
          onChange={(event)=>props.handleChangeBirthDay(event)}
        />
        <TextField 
          className="textField" id="outlined-basic" label="lieu de naissance" variant="outlined" 
          value={props.birthPlace}
          onChange={(event)=>props.handleChangeBirthPlace(event)}
        />
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
        <TextField 
          className="textField" id="outlined-basic" label="sexe" variant="outlined"
          value={props.gender}
          onChange={(event)=>props.handleChangeGender(event)} 
        />
        <TextField 
          className="textField" id="outlined-basic" label="taille" variant="outlined" 
          value={props.height}
          onChange={(event)=>props.handleChangeHeight(event)}
        />
        <TextField 
          className="textField" id="outlined-basic" label="proffession" variant="outlined" 
          value={props.job}
          onChange={(event)=>props.handleChangeJob(event)}
        />
      </Box>

    </div>
  );
};
export default FirstStep;

// gender={gender}
// height={height}
// job={job}