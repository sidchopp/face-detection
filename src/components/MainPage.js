import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



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