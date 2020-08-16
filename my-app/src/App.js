import React from 'react';
import logo from './maskemoji.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Face Mask Detection
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <header className="App-body">
        <p style={{color: 'black'}}>
          Wearing a face mask is a deemed as a way to slow the spread of the virus amid the COVID-19 pandemic.
          Our team trained a model that detects whether the person in the image has face mask on or not. The model can be used in various ways, such as:
        </p>
        <ul style={{textAlign: 'left'}}>
          <li> For use in grocery stores where face masks are required for entry. </li>
          <li> Detecting if a person at a door is wearing a mask before you open it.</li>
          <li> And more...</li>
        </ul>
        <p style={{color: 'black'}}>
          You can upload an image here and we'll detect the presence of masks. While this may be a trivial application for our model, it serves the purpose of demonstrating
          the accuracy and concept of our project.
        </p>
        
        <ImageForm> </ImageForm>


        
        <a href="https://github.com/albertklam/hack20" style={{color: 'brown', textDecoration: 'none', fontSize: 16, padding: 100}}> Source Code </a>
      </header>
    </div>
    
  );
}

function upload() {
  alert("do something");
}

class ImageForm extends React.Component {
  render() {
    return (
      <form action="upload_photo" method="POST" enctype="multipart/form-data">
        <p style={{fontSize: 40, color: 'yellow'}}>Upload your image:</p>
        <input type="file" name="file"></input>
        <input type="submit" name="submit" value="Submit"></input>
      </form>
      
    );
  }
}


export default App;
