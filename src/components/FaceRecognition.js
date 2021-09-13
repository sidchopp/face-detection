import React from 'react'



// CSS
import '../App.css'

function FaceRecognition({ imageURL, boundingBox }) {
  return (

    < div>
      <div style={{ position: 'absolute' }}>

        <img id="inputImage" src={imageURL} alt="" width='320px' height='auto' />
        <div className='face-box'
          style={{
            top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol
          }}>
        </div>

      </div>


    </div>
  )
}

export default FaceRecognition;
