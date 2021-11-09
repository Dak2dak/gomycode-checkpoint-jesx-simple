import React from 'react';
import myImage from './imageInSrc.jpg';
import './Style.css';

function App() {
  return (
    <div className="App">

      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={myImage} alt="imageInSrc.jpg" />
        <br />
        <img src="/imageInPublic.jpg" />
      </div>

      <iframe width={320} height={240} src="https://www.youtube.com/embed/f9s0XvNETkM" type="video/mp4" controls></iframe>
    
    </div>
  );
}

export default App;
