import React from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';
const cx = classnames.bind(style);

const Home = () => {
  return <div className={cx('home')}>From App Yo.!</div>;
};

export default Home;
