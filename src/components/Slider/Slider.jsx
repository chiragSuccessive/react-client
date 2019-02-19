import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getNextRoundRobin, getRandomNumber } from '../../libs/utils/math';
import style from './style';
import { DEFAULT_BANNER_IMAGE } from '../../config/constants';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const { duration, random } = this.props;
    let value;
    this.interval = setInterval(() => {
      const { index } = this.state;
      if (random) {
        value = getRandomNumber(6);
      } else {
        value = getNextRoundRobin(6, index);
      }
      this.setState({ index: value });
    }, duration);
  }

  render() {
    const { banners, defaultBanner, ...rest } = this.props;
    const { index } = this.state;
    const source = banners.length ? banners[index] : defaultBanner;
    const { align } = style;
    return (
      <div style={align}>
        <img src={source} alt="anyimage" {...rest} />
      </div>
    );
  }
}
Slider.propTypes = {
  alt: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string),
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};
Slider.defaultProps = {
  alt: 'Default Banner',
  defaultBanner: DEFAULT_BANNER_IMAGE,
  banners: [],
  duration: 2000,
  height: 200,
  random: false,
};

export default Slider;