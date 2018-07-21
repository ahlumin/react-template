import React from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';
const cx = classnames.bind(style);

export default class extends React.Component {
  render() {
    return (
      <div className={cx('main')}>
        From App Yo.!
      </div>
    )
  }
}