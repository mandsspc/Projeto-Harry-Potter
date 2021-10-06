import * as React from "react"
import './index.css';

import Historia from '../components/History';

const Box = {
  background: "#232129",
  height: '100vh',
}

const History = () => {
  return (
    <div style={Box}>
        <Historia />
    </div>
  )
}

export default History;
