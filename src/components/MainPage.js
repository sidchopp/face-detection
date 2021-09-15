import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



//components

import MyParticles from './MyParticles';
import SignIn from './SignIn';
import FaceDetection from './FaceDetection'
import Face from '../images/face.jpg'

//CSS

import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${Face})`,
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

  const [route, setRoute] = useState('signIn')
  const [isSignedIn, setIsSignedIn] = useState(false)

  ////// Fetching data from backend server

  // const dataFromServer = async function () {
  //   const response = await fetch("http://localhost:4000");
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // useEffect(() => {
  //   dataFromServer()
  // }, [])

  ////// Back end fetching above

  function onRouteChange(route) {
    if (route === 'signout') {
      setIsSignedIn(false)
    } else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route);
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* For left Image */}

      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        < MyParticles id="tsparticles" />
      </Grid>

      {/* For Right form */}
      {route === 'signIn' ? <SignIn onRouteChange={onRouteChange} /> : <FaceDetection onRouteChange={onRouteChange} />}




    </Grid>
  );
}

export default MainPage;