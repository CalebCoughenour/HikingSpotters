import React from 'react';
import { SliderData } from './Data';
import '../../App.css';
import { ImageSlider } from '../../components';

function Photos() {
  return (
    <div>
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Photos;