import React from 'react'

import { Container } from '@material-ui/core';

function FaceRecognition() {
  return (

    <Container maxWidth="xl">
      <img src="https://samples.clarifai.com/face-det.jpg" alt="image" />
    </Container>
  )
}

export default FaceRecognition;
