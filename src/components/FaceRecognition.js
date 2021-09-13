import React from 'react'

function FaceRecognition({ imageURL }) {
  return (

    <div  >
      <img id="inputImage" src={imageURL} alt="" width='320px' height='auto' />
    </div>
  )
}

export default FaceRecognition;
