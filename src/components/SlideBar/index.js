import React from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';
const cx = classnames.bind(style);

export default class SlideBar extends React.Component {
  state = {
    offsetLeft: 0,
    offsetWidth: 0,
    maxPositionX: 0,
    fillPercent: 0,
  }

  componentDidMount() {
    const {
      offsetLeft,
      offsetWidth,
    } = this.slider;

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
    const pageX = e.pageX || e.changedTouches[0].pageX;
    const { offsetLeft, offsetWidth, maxPositionX, } = this.state;
    const moveDistance = pageX <= offsetLeft ? 0 :
      pageX >= maxPositionX ? offsetWidth : pageX - offsetLeft;
    const value = Math.floor((moveDistance / offsetWidth) * 100);

    this.setState({
      fillPercent: value,
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
        ref={el => {
          this.slider = el;
        }
        }
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