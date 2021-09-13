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


import FaceRecognition from './FaceRecognition';
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

// Clarifai API
const app = new Clarifai.App({
  apiKey: '7ab62c9b6f314d43bfd63c689ba5f4f7'
});


function FaceDetection() {
  const classes = useStyles();

  //states
  const [userInput, setUserInput] = useState('');
  const [imageURL, setImageURL] = useState(" ");
  const [boundingBox, setBoundingBox] = useState({});

  function faceLocation(data) {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // we are referencing the img attribute of id in the FaceRecognition component
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    // this will return an OBJECT
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  function displayFaceBox(box) {
    setBoundingBox(box)

  }

  //Event Handlers
  function onInputChange(e) {
    e.preventDefault();
    //console.log(e.target.value);
    // To make the state value of userInput equals what we write in the input field
    setUserInput(e.target.value)
  }


  function OnButtonSubmit(e) {
    e.preventDefault();

    console.log(' I m clicked');
    //To make the state value of imageURL equals to the userInput(or what we write in the input field)
    setImageURL(userInput)


    // face detect api using FACE_DETECT_MODEL is predicting our userInput state value
    app.models.predict(Clarifai.FACE_DETECT_MODEL, userInput)
      .then(function (response) {
        //console.log("Response from API:", response);
        // do something with response
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        faceLocation(response)
      },
        function (err) {
          // there was an error
          console.log(err);
        }
      );
  }

  return (
    //style={{ background: '#ED820E ' }}
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
        {/* Component Import */}

        <FaceRecognition imageURL={imageURL} />
      </div>


    </Grid>
  )
}

export default FaceDetection;
