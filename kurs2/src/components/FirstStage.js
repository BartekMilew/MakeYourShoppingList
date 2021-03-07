import { FormControl, Grid, InputLabel, Select, TextField, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { KeyboardDatePicker,MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
    //   marginLeft: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    //   width: 200,
    },
    styleTd:{
        verticalAlign:"inherit"
    }
  }));
function FirstStage({documentState,setDocumentState}) {


    const classes = useStyles();
const handleChangeInformation=(value,props)=>{
 
    // setDocumentState({...documentState,
    //     props:value})
}
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
    return (
        <>
        <Grid item xs={12}>
        <Typography variant="subtitle2">Document Text</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField 
        fullWidth
        value={documentState.documentState} 
                           onChange={(e)=>setDocumentState({...documentState,
                            documentState:e.target.value})} 
                            label="Enter document text" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle2">Document select</Typography>
        </Grid>
        <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Enter document select</InputLabel>
        <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label="Enter document select"
                           fullWidth
                           value={documentState.selectedState}
                           onChange={(e)=>setDocumentState({...documentState,
                            selectedState:e.target.value})} 
                        >
                                <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
                           </Select>
                           </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle2">Document Date</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField
                       fullWidth
                    label="Filled" variant="outlined"
                       
        id="date"
        label="Enter document date"
        type="date"
        value={documentState.selectedDate}
        onChange={(e)=>setDocumentState({...documentState,
            selectedDate:e.target.value})} 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
       

</>

        //    <table
        //    style={{borderSpacing:"10px 10px",borderCollapse:"separate",verticalAlign:"inherit",display:"inline-block"}}
        //    >
        //        <tbody>
        //            <tr>
        //                <td className={classes.styleTd}>
        //                    <p> document text</p>
        //                </td>
        //                <td className={classes.styleTd}>
        //                    
        //                </td>
                       
        //            </tr>
        //            <tr>
        //                <td className={classes.styleTd}>
        //                    Select
        //                </td>
        //                <td className={classes.styleTd}> 
        //                
        //                </td>

        //            </tr>
        //            <tr>
        //                <td className={classes.styleTd}>
        //                    date
        //                </td>
        //                <td className={classes.styleTd}>
        //               

        //                </td>
        //            </tr>
        //        </tbody>
        //    </table>
    )
}

export default FirstStage
