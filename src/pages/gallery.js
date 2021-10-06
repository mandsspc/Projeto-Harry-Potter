import * as React from "react"
import './index.css';

import Galeria from '../components/Gallery';

const Box = {
  background: "#232129",
}

const Gallery = () => {
  return (
    <div style={Box}>
      <Galeria />
    </div>
  )
}

export default Gallery;