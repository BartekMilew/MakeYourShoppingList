import React from "react";
import cx from "classnames";
import styles from "./Columns.module.scss";
import withCollapse from "../../hoc/withCollapse";
import withAuth from "../../hoc/withAuth";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalComponent from "../Modal"
import { FormHelperText } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:"60%",
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

const Columns = ({ isCollapsed, isAuthorised, toggleAuth, toggle }) => {
  const rowClass = cx("columns", {
    [styles.isCollapsed]: isCollapsed,
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const body = (
    <div  className={classes.paper}>
 
      <ModalComponent/>
    </div>
  );

  return (
    <div className="columns">
      <div className="column">
        <p>Authorised: {isAuthorised.toString()}</p>
        <button className="button is-dark is-large" onClick={toggle}>
          collapse
        </button>
        <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
        <button className="button is-warning is-large" onClick={toggleAuth}>
          {isAuthorised ? "logout" : "login"}
        </button>
        {isAuthorised ? (
          <div className={rowClass}>
            <div className="column">
              <div className="notification is-primary">First column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Second column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Third column</div>
            </div>
            <div className="column">
              <div className="notification is-primary">Fourth column</div>
            </div>
          </div>
        ) : (
          <h2 class="title is-2">You must sign in to see this content</h2>
        )}
      </div>
    </div>
  );
};

export default withAuth(withCollapse(Columns));
