import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { ImageSlider, InfoSection } from '../../components';
import { SliderData } from '../Photos/Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <ImageSlider slides={SliderData} />
      <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home;