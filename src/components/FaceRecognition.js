import React from 'react'

import { Container } from '@material-ui/core';

function FaceRecognition({ imageURL }) {
  return (

    <Container maxWidth="xl">
      <img src={imageURL} alt="image" />
    </Container>
  )
}

export default FaceRecognition;
