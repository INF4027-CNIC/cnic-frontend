// import React from "react";
// import { TextField } from '@mui/material';
// import PersonIcon from "@mui/icons-material/Person";
// import GroupsIcon from "@mui/icons-material/Groups";

// const ThirdStep = (props) => {
//   return (
//     <div className="form">
//       <div>
//         <Box
//             component="div"
//             sx={{
//             '& > :not(style)': { m: 0.5, width: '50%' },
//             // width: '100%',
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <TextField className="textField" id="outlined-basic" label="poste d'identification" variant="outlined" />
//         </Box>
//         <div></div>
//         <div></div>

//       </div>
//         <div>

//         </div>

//     </div>
//   );
// };
// export default ThirdStep;



import React from "react";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import "../styles.css"


const ThirdStep = (props) => {
  return (
    <div className="form">
        <div style={{width: "100%"}}>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { width: '60vh', marginBottom: "10px" },
                // width: '100%',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField className="textField" id="outlined-basic" label="poste d'identification" variant="outlined" />
            </Box>
            <div className="Item">
                <h4 className="titleItem">Date de délivrance</h4>
                <p className="elemItem">02.04.2017</p>
            </div>
            <div className="Item">
                <h4 className="titleItem" >Date d’expiration</h4>
                <p className="elemItem">02.04.2017</p>
            </div>
        </div>
        <div style={{width: "90%"}}>
            <div className="Item">
                <h4 className="titleItem">Identifiant Unique</h4>
                <p className="elemItem">20190365432876</p>
            </div>
            <div className="Item">
                <h4 className="titleItem">Autorité</h4>
                <p className="elemItem">Martin MBARGA NGUÉLÉ</p>
            </div>
        </div>
    </div>
  );
};
export default ThirdStep;
