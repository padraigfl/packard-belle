import React from 'react';
import cx from 'classnames';
import Start from '../ButtonStart/ButtonStart';
import standardMenuWrapper from '../StandardMenuHOC';

const Started = standardMenuWrapper(Start);

const StartMenu = props => {
  const { className, ...otherProps } = props;
  return <Started className={cx('StartMenu', className)} {...otherProps} />;
};

StartMenu.propTypes = Started.propTypes;

export default StartMenu;
