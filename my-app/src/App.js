import React from 'react';
import logo from './maskemoji.png';
import './App.css';
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
  constructor(props) {
    super(props);
    this.state = {selectedFile: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="POST" enctype="multipart/form-data">
        <p style={{fontSize: 40, color: 'yellow'}}>Upload your image:</p>
        <input type="file" multiple="false" accept="image/*" name="file" onChange={this.handleChange}></input>
        <input type="submit" name="submit" value="Submit"></input>
      </form>
    );
  }

  handleChange(e) {
    this.setState({ selectedFile: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return (
      <div>
        <img id="image" crossorigin="anonymous" src={this.state.selectedFile} alt="This is not an image"/>
        {this.run()}
      </div>
    );
  }

  async run() {
    const model = await tf.automl.loadImageClassification('model.json');
    const image = document.getElementById('image');
    const predictions = await model.classify(image);

    console.log(predictions);

    // Show the resulting object on the page.
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(predictions, null, 2);
    document.body.append(pre);
  }

}


export default App;
