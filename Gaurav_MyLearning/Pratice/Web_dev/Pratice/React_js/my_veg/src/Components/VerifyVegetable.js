import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

const VerifyVegetable = () => {
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [prediction, setPrediction] = useState('');

  const loadModel = async () => {
    const loadedModel = await mobilenet.load();
    setModel(loadedModel);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      predictVegetable(file);
    }
  };

  const predictVegetable = async (file) => {
    const img = document.createElement('img');
    img.src = imageURL;
    img.width = 300; // Adjust this as needed
    img.height = 300; // Adjust this as needed

    const predictions = await model.classify(img);
    setPrediction(predictions[0].className); // Displaying the top prediction
  };

  if (!model) {
    loadModel();
    return <div>Loading Model...</div>;
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {imageURL && <img src={imageURL} alt="Uploaded" width="300" height="300" />}
      {prediction && <p>Detected Vegetable: {prediction}</p>}
    </div>
  );
};

export default VerifyVegetable;
