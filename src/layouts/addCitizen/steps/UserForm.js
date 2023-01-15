import React, { useState } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

import MultiStepProgressBar from "./MultiStepProgressBar";
import "../styles.css"


const UserForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: ""
  });

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
    
  };

  const pageTitles = [
    "Information personelle",
    "Information suplementaire",
    "Information complementaire",
  ];
  const pageSubTitiles = [
    "You can always change them later.",
    "You can always create another workspace later",
    "We'll streamline your setup expereince accordingly.",
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />   
    else return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
  };

  //handle field changes
  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
    console.log("the user", userInput);
  };

  return (
    <div className="userForm">
      <div style={{ margin: "40px auto", width: "95%" }}>
        <MultiStepProgressBar step={page} />
      </div>

      <div className="userForm-container">
        <div className="userForm-container-header">
          <h2 className="colorTitle">
            {page === pageTitles.length
              ? `Congratulations, ` + userInput.displayname
              : pageTitles[page]}
          </h2>
          {/* <p>{pageSubTitiles[page]}</p> */}
        </div>
        <div className="userForm-container-body">{PageDisplay()}</div>
        <div className="userForm-footer">
            <div>
                {page === 0 ?
                    null
                :
                    <Button
                        variant="contained"
                        sx={{
                            color: "#FFF",
                            maxHeight: 50,
                            backgroundColor: "#C0C0C0",
                            '&:hover': { backgroundColor: "transparent" },
                        }}
                        startIcon={
                            <KeyboardBackspaceIcon
                            color="white"
                            sx={{
                                height: 40,
                                // width: 40,
                                fontSize: 40,
                            }}
                
                        />
                        }
                        
                        onClick={() => {
                           
                            if(page > 0) setPage((currPage) => currPage - 1);
                        }}
                    >
                        Précédent
                    </Button>
                }

            </div>

            <div>
            {page === pageTitles.length - 1 ?
              <Button
                variant="contained"
                sx={{
                    color: "#FFF",
                    maxHeight: 50,
                }}
                
                onClick={() => {
                    if (page === pageSubTitiles.length - 1) {
                    console.log(userInput);
                    } else {
                    setPage((currPage) => currPage + 1);
                    }
                }}
                >
                    Valider
                </Button>
              : 
              <Button
                variant="contained"
                sx={{
                    color: "#FFF",
                    maxHeight: 50,
                }}
                endIcon={
                    <ArrowRightAltIcon
                        color="white"
                        sx={{
                            height: 40,
                            // width: 40,
                            fontSize: 40,
                        }}
            
                    />
                }
                    onClick={() => {
                        if (page === pageSubTitiles.length - 1) {
                        console.log(userInput);
                        } else {
                        setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                    Suivant
                    
                </Button>
 
            }
            </div>
        
        </div>
      </div>
    </div>
  );
};
export default UserForm;
