import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HowToRegIcon from '@material-ui/icons/HowToReg';

//components

import MyParticles from './MyParticles';
import SignIn from './SignIn';
import FaceDetection from './FaceDetection'

//CSS

import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: 'url(https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

function MainPage() {
  const classes = useStyles();

  // states

  const [route, setRoute] = useState('signin')


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* For left Image */}

      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        < MyParticles id="tsparticles" />
      </Grid>

      {/* For Right form */}
      {route === 'signIn' ? <SignIn /> : <FaceDetection />}
      {/* <SignIn /> */}


    </Grid>
  );
}

export default MainPage;