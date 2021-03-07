import { Button, Grid, Select, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import { KeyboardDatePicker,MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import "./SecondStage.css"
import ModalAddNew from './ModalAddNew';
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
    },
    gridStyleButtons:{
        marginBottom:"15px",
    },
    button:{
        marginRight:"10px"
    }
  }));
function SecondStage() {

    const [openModalAddNew,setOpenModalAddNew]=useState(false)
    const [arrayWithCars,setArrayWithCars]=useState([])
    const classes = useStyles();
    const handleClickAddCar=(object)=>{
        setOpenModalAddNew(false)

        setArrayWithCars([...arrayWithCars,object])
    }
    const handleDuplicate=()=>{
        const lastArray=arrayWithCars[arrayWithCars.length-1]
        setArrayWithCars([...arrayWithCars,lastArray])
    }
    return (
        <>
          <Grid item xs={5} className={classes.gridStyleButtons}>
               <Button color="primary" variant="contained" className={classes.button} onClick={()=>setOpenModalAddNew(true)}>
                              Add new
                          </Button>
                          <Button color="primary" variant="contained" className={classes.button} onClick={handleDuplicate} >
                              Duplicate last
                          </Button>
          </Grid>
         <Grid item xs={12} >
          <table>
              <thead>
                  <tr>
                      <th>
                          Name
                      </th>
                      <th>
                          Color
                      </th>
                      <th>
                          Date
                      </th>
                    
                  </tr>
              </thead>
              <tbody>
                  {arrayWithCars.map(value=>{
                      return(

                      
                    <tr>
                        <td>
                            {value.name}
                        </td>
                        <td>
                            {value.color}
                        </td>
                        <td>
                            {value.date}
                        </td>
                        <td>
                          <Button color="primary" variant="contained">
                              Edit
                          </Button>
                      </td>
                      <td>
                      <Button color="secondary" variant="contained">
                              Delete
                          </Button>
                      </td>
                    </tr>
                      )
                  })}
             
              </tbody>
          </table>
          </Grid>
        {openModalAddNew&& <ModalAddNew handleClickAddCar={handleClickAddCar} openModalAddNew={openModalAddNew} setOpenModalAddNew={setOpenModalAddNew}/>}
          </>
    )
}

export default SecondStage
