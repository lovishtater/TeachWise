import React from 'react'

const Logo = () => {
  return (
    <div id="logocontainer">
      <div id="twlogo">Tw</div>
      <div className="loader" style={{left:"5px", top:"0", height:"5px", width:"0", animation:"slide1 2s linear forwards infinite" }} ></div>
      <div className="loader" style={{right:"0", top:"5px", width:"5px", height:"0", animation:"slide2 2s linear forwards infinite" ,animationDelay:"0.5s"}}></div>
      <div className="loader" style={{right:"5px", bottom:"0", height:"5px", width:"0", animation:"slide3 2s linear forwards infinite"}}></div>
      <div className="loader" style={{left:"0", bottom:"5px", width:"5px", height:"0", animation:"slide4 2s linear forwards infinite" ,animationDelay:"0.5s"}}></div>
    </div>
  )
}

export default Logo