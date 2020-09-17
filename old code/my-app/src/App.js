import React from 'react';
import logo from './maskemoji.png';
import './App.css';
import model from './model.json';
const mod = model;

const tf = require('@tensorflow/tfjs');


function App() {
  return (
    <div>
      <script src="https://unpkg.com/@tensorflow/tfjs"/>
      <script src="https://unpkg.com/@tensorflow/tfjs-automl"/>

      <div className="App">
        <header className="App-header">
          <p>
            Face Mask Detector
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <header className="App-body">
          <p style={{color: 'black'}}>
            Wearing a face mask is a deemed as a way to slow the spread of the virus amid the COVID-19 pandemic.
            Our team trained a model that detects whether a person in an image has face mask on or not. The model can be used in various ways, such as:
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
          <p style={{color: 'yellow', fontSize: 35}}>
            Upload your image here:
          </p>
          
          <ImageForm> </ImageForm>

          <p style={{padding: 50}}>
            Learn more about the importance of masks 
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover-guidance.html#:~:text=Masks%20are%20recommended%20as%20a,This%20is%20called%20source%20control."
            style={{textDecoration: 'none'}}> here.</a>
          </p>
          
          <a href="https://github.com/albertklam/hack20" style={{color: 'brown', textDecoration: 'none', fontSize: 16, padding: 50}}> Source Code </a>
        </header>
      </div>
    </div>
  );
}


class ImageForm extends React.Component {
  

  render() {
    return (
      /*
      <div>
        <input type="file" onChange="readURL(this)"></input>
        <button onClick={this.run()}>Upload</button>
        <img id="image" crossorigin="anonymous" alt="your image"></img>
      </div>
      */
      <div>
        <input type="file"></input>
        <input type="submit" onClick={cry}></input>
      </div>
    );
  }

  /*
  readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        ("#image").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  async run() {
    const model = await tf.automl.loadImageClassification(mod);
    const image = document.getElementById('image');
    const predictions = await model.classify(image);
    console.log(predictions);
    // Show the resulting object on the page.
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(predictions, null, 2);
    document.body.append(pre);
  }
  */

}

function cry() {
  alert(":(");
}


export default App;
