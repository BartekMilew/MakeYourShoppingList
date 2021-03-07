import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display:"flex",
    justifyContent:"center"
  },
  stepper:{
    backgroundColor:theme.palette.background.default
  },
  paperCss:{
    padding:theme.spacing(4),
    paddingTop:theme.spacing(4),
    // textAlign:'center',
    marginBottom:"10px"
  }
}));

function getSteps() {
  return ['Select document', 'select', 'Conclusion'];
}

function getStepContent(stepIndex,documentState,setDocumentState) {
  switch (stepIndex) {
    case 0:
      return <FirstStage documentState={documentState} setDocumentState={setDocumentState} />;
    case 1:
      return <SecondStage/>;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function ModalLine() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [documentState,setDocumentState]=useState({
    selectedDate:"",
    documentState:"",
    selectedState:""
  })
  console.log(documentState)
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);


  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div><Paper className={classes.paperCss}>

      <Grid container spacing={1}>
      {getStepContent(activeStep,documentState,setDocumentState)}
            </Grid>
            </Paper>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button disabled={activeStep===0&& Object.keys(documentState).filter(value=>documentState[value]==="").length>0 }    variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}