import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { BiRightArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import {Form, FormControl, Container} from "react-bootstrap";
import * as Yup from 'yup';
import EventForm from "./EventForm.js"
import Events from './Events'
import Navigation from './Navigation'

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Description can't be longer than 100 characters")
    .required("*Event Description is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  blog: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
});


const TemporaryDrawer = ({toggleDrawer, state}) => {
  const useStyles = makeStyles({
    drawerPaper: {
      height: `100%`,
      top: document.querySelector('.navbar-custom').clientHeight,
      '@media (min-width:500px)': { 
        width: '55%'
      },

      '@media (min-width:1000px)': { 
        width: '35%'
      },
    },

    drawerPaper2: {
      '@media (min-height:500px)': { 
        height: '55%'
      },

      '@media (min-height:1000px)': { 
        height: '60%'
      },

      '@media (min-height:1000px)': {
        height: '35%',
        width: '50%'
      }
    }
  });
  
  const classes = useStyles();

  const formDrawer = (anchor) => {
    return (
    <div>
      <EventForm />
      <Events />
    </div>
  )};

  return (
    <div>
      {
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} BackdropProps={{ invisible: true }} classes={{
          paper: classes.drawerPaper
        }}>
            {formDrawer('left')}
          </Drawer>
      }
    </div>
    
  );
}

export default TemporaryDrawer;

