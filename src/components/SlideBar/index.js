import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './style.scss';
const cx = classnames.bind(style);

export default class SlideBar extends React.Component {
  constructor(props) {
    super(props);
    const { value, max, min,} = props;
    const fillPercent = value >= max ? 100 : value <= min ? 0 : Math.floor((value / max) * 100);

    this.state = {
      offsetLeft: 0,
      offsetWidth: 0,
      maxPositionX: 0,
      fillPercent,
    }
  }

  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    value: PropTypes.number,
    onDrag: PropTypes.func,
  }

  static defaultProps = {
    max: 100,
    min: 0,
    value: 0,
  }

  slider = React.createRef();

  componentDidMount() {
    const {
      offsetLeft,
      offsetWidth,
    } = this.slider.current;

    this.setState({
      offsetLeft,
      offsetWidth,
      maxPositionX: (offsetLeft + offsetWidth),
    });
  }

  handleMouseDown = () => {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
  }

  handleDrag = e => {
    e.stopPropagation();
    const { max, onDrag, } = this.props;
    const pageX = e.pageX || e.changedTouches[0].pageX;
    const { offsetLeft, offsetWidth, maxPositionX, } = this.state;
    const moveDistance = pageX <= offsetLeft ? 0 :pageX >= maxPositionX ? offsetWidth : pageX - offsetLeft;
    const fillPercent = Math.floor((moveDistance / offsetWidth) * 100);

    const newValue = Math.floor((fillPercent / 100) * max);
    this.setState({
      fillPercent,
    }, () => {
      onDrag && onDrag(newValue, e);
    });
  }

  handleEnd = e => {
    e.stopPropagation();
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleEnd)
  }

  render() {
    const { fillPercent, } = this.state;
    return (
      <div
        ref={this.slider}
        className={cx('slider')}
      >
        <span
          className={cx('slider-fill')}
          style={{ width: `${fillPercent}%` }}
        ></span>
        <span
          className={cx('slider-button')}
          style={{ left: `${fillPercent}%` }}
          onMouseDown={this.handleMouseDown}
          onTouchMove={this.handleDrag}
        >{fillPercent}</span>

        <div className={cx('slider-label')}>
          <span className={cx('slider-label-item', 'twenty-five')}>25</span>
          <span className={cx('slider-label-item', 'fifty')}>50</span>
          <span className={cx('slider-label-item', 'seventy-five')}>75</span>
          <span className={cx('slider-label-item', 'one-hundred')}>100</span>
        </div>
      </div>
    )
  }
}