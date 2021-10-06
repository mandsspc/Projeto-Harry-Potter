import * as React from "react"
import './index.css';

import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Box = {
  background: "#232129",
}

const Index = () => {
  return (
    <div style={Box}>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default Index;