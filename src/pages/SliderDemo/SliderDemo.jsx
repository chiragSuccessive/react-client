import React from 'react';
import Slider from '../../components/Slider';
import { DEFAULT_BANNER_IMAGE, PUBLIC_IMAGE_FOLDER } from '../../config/constants';

const SliderDemo = () => {
  const banners = [
    `${PUBLIC_IMAGE_FOLDER}cloud.jpg`,
    `${PUBLIC_IMAGE_FOLDER}default.png`,
    `${PUBLIC_IMAGE_FOLDER}dns-server.png`,
    `${PUBLIC_IMAGE_FOLDER}full-stack-web-development.jpg`,
    `${PUBLIC_IMAGE_FOLDER}js.jpg`,
    `${PUBLIC_IMAGE_FOLDER}load-balancer.png`,
  ];
  return (
    <Slider duration={1000} random={false} banners={banners} defaultBanner={DEFAULT_BANNER_IMAGE} />
  );
};

export default SliderDemo;
