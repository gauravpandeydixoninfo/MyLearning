import React, { Component } from 'react';
import loading from './loading.gif';

const spinner=(props)=> {
  
    return (
      <div className='text-center'>
        <img src={loading} alt="laoding"/>
        
      </div>
    );
  }


export default spinner;
