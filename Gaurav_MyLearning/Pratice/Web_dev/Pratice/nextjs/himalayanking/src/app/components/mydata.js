import React from 'react';
import cards from './cards' ; // Import the component you want to render

const Mydata = () => {
  
    const components = Array.from({ length: 10 }).map((_, index) => (
      // {console.log("working for loop");}
      <cards key={index} />
    ));
  
  return (
    <div>
      <h1>Rendering MyComponent 10 times:</h1>
      {components}
    </div>
  );
};

export default Mydata;