import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Clarifai from 'clarifai'

// Components

import Footer from './Footer'

//CSS

import '../App.css'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function FaceDetection() {
  const classes = useStyles();

  //states
  const [inputLink, setInputLink] = useState('')

  //Event Handlers
  function onInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }




  const app = new Clarifai.App({
    apiKey: '7ab62c9b6f314d43bfd63c689ba5f4f7'
  });

  function OnButtonSubmit(e) {
    e.preventDefault();

    console.log(' I m clicked');

    // face detect api
    app.models.predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/face-det.jpg")
      .then(
        function (response) {
          // do something with response
          console.log(response);
        },
        function (err) {
          // there was an error
          console.log(err);
        }
      );
  }

  return (
    <Grid style={{ background: '#ED820E ' }} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          You are Signed In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="url"
            label=" Enter the URL"
            name="url"

            autoFocus
            onChange={onInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SearchIcon />}
            onClick={OnButtonSubmit}
          >
            Detect
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            startIcon={<ExitToAppIcon />}
          >
            Sign Out
          </Button>
          <Grid container>
          </Grid>
        </form>
      </div>
    </Grid>
  )
}

export default FaceDetection;
