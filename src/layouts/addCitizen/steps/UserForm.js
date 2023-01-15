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
  const [erreur1, setErreur1] = useState(false)
  const [erreur2, setErreur2] = useState(false)


  const [names, setNames] = useState("");
  const [surName, setSurNames] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [job, setJob] = useState("");
  const [dadName, setDadName] = useState("");
  const [munName, setMunName] = useState("");
  const [adress, setAdress] = useState("");
  const [station, setStation] = useState("");

  //manageing state in one objet
  const userInput = {
    names:  names,
    surName: surName,
    birthDay: birthDay,
    birthPlace: birthPlace,
    gender: gender,
    height: height,
    job: job,
    dadName: dadName,
    munName: munName,
    adress: adress,
    station: station,
  }

  //for name
  const handleChangeName = (e) => {
    setNames(e.target.value)
  };
  const handleChangeSurName = (e) => {
    setSurNames(e.target.value)
  };
  const handleChangeBirthDay = (e) => {
    setBirthDay(e.target.value)
  };
  const handleChangeBirthPlace= (e) => {
    setBirthPlace(e.target.value)
    console.log("the user", names);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value)
  };
  const handleChangeHeight = (e) => {
    setHeight(e.target.value)
  };
  const handleChangeJob = (e) => {
    setJob(e.target.value)
  };
  const handleChangeDadName = (e) => {
    setDadName(e.target.value)
  };
  const handleChangeMunName = (e) => {
    setMunName(e.target.value)
  };
  const handleChangeAdress = (e) => {
    setAdress(e.target.value)
  };
  const handleChangeStation= (e) => {
    setStation(e.target.value)
  };

  const nextStep = () => {
    if (page === pageSubTitiles.length - 1) {
      console.log(userInput);
    } else {
      console.log("step value", names && surName && birthDay && birthPlace && gender && height && job && page === 0)
      if (
        names && surName && 
        birthDay && birthPlace && 
        gender && height && job && 
        page === 0
        ) {

        setPage((currPage) => currPage + 1);
        setErreur1(false)

      } else if (page === 0) {

        setErreur1(true)
      }
      if (
        dadName && munName && 
        adress && page === 1
        ) {

        setPage((currPage) => currPage + 1);
        setErreur2(false)

      } else if (page === 1) {

        setErreur2(true)
      }
    }
      
  }

  const pageTitles = [
    "Information personelle",
    "Information suplementaire",
    "Information complementaire",
  ];
  const pageSubTitiles = [
    "veillez a remplir tous les champs d'informations.",
    "Remplissez tout information suplementaire",
    "Renseigner votre poste d'identification.",
  ];

  const PageDisplay = () => {
    if (page === 0)
      return ( 
        <FirstStep 
          nextStep={nextStep} 
          
          names={names}
          surName={surName}
          birthDay={birthDay}
          birthPlace={birthPlace}
          gender={gender}
          height={height}
          job={job}
          handleChangeName={handleChangeName}
          handleChangeSurName={handleChangeSurName}
          handleChangeBirthDay={handleChangeBirthDay}
          handleChangeBirthPlace={handleChangeBirthPlace}
          handleChangeGender={handleChangeGender}
          handleChangeHeight={handleChangeHeight}
          handleChangeJob={handleChangeJob}
        />
      );
    else if (page === 1)
      return (
        <SecondStep 
          nextStep={nextStep} 

          dadName={dadName}
          munName={munName}
          adress={adress}
          handleChangeDadName={handleChangeDadName}
          handleChangeMunName={handleChangeMunName}
          handleChangeAdress={handleChangeAdress}
        />
      );   
    else return (
      <ThirdStep 
        nextStep={nextStep} 

        station={station}
        handleChangeStation={handleChangeStation}
      />
    );
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
          { erreur1 && page === 0 ?
            <p className="errorSigne">{ pageSubTitiles[page] }</p>:
            erreur2 &&  page === 1?
            <p className="errorSigne">{pageSubTitiles[page]}</p>:
              null
          }
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
                    height: 50,
                    width: 100,
                }}
                
                onClick={() => {
                    if (page === pageSubTitiles.length - 1) {
                    console.log(userInput);
                    } else {
                      console.log("step value", names && surName && birthDay && birthPlace && gender && height && job && page === 0)
                      if (names && surName && birthDay && birthPlace && gender && height && job && page === 0) {
                        setPage((currPage) => currPage + 1);
                      }
                      if (dadName && munName && adress && page === 1) {
                        setPage((currPage) => currPage + 1);
                      }
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
                  onClick={nextStep}
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
