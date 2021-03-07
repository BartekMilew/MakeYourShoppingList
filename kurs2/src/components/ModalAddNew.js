import { Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width:"30%",
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
      
    
      },
      modal:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       
      }
  }));
  
function ModalAddNew({openModalAddNew,setOpenModalAddNew,handleClickAddCar}) {
    const classes = useStyles();
    const [nameState,setNameState]=useState("")
    const [colorState,setColorState]=useState("")
    const [dateState,setDateState]=useState("")
    return (
        <Modal
        open={openModalAddNew}
        onClose={()=>setOpenModalAddNew(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div  className={classes.paper}>
    

      <Grid container spacing={1}>
        <Grid item xs={12}>
        <Typography variant="subtitle2">Name</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField
        fullWidth
        value={nameState} 
                           onChange={(e)=>setNameState(e.target.value)} 
                            label="Enter name" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle2">Color</Typography>
        </Grid>
        <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Enter color select</InputLabel>
        <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label="Enter document select"
                           fullWidth
                           value={colorState}
                           onChange={(e)=>setColorState(e.target.value)} 
                        >
                                <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>white</MenuItem>
          <MenuItem value={20}>red</MenuItem>
          <MenuItem value={30}>black</MenuItem>
                           </Select>
                           </FormControl>
        </Grid>
        
        <Grid item xs={12}>
        <Typography variant="subtitle2">Date</Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField
                       fullWidth
                    label="Filled" variant="outlined"
                       
        id="date"
        label="Enter  date"
        type="date"
        value={dateState}
        onChange={(e)=>setDateState(e.target.value)} 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
        <Grid item xs={12}>
        <Button disabled={nameState===""||colorState===""||dateState===""}
        color="primary" variant="contained" onClick={()=>handleClickAddCar({name:nameState,color:colorState,date:dateState})}>
                              Add
                          </Button>
        </Grid>
        </Grid>
      
       </div>
      </Modal>
    )
}

export default ModalAddNew
