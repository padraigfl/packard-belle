import React from 'react';
import cx from 'classnames';
import Button, { commonButtonPropTypes } from '../Button';

import './_StartButton.scss';

const StartButton = props => {
  const {
    className,
    isActive,
    onBlur,
    onClick,
    ...otherProps
  } = props;

  return (
    <Button
      {...otherProps}
      className={cx('StartButton', className)}
      onClick={onClick}
      onBlur={onBlur}
      isActive={isActive}
    />
  );
};

StartButton.propTypes = commonButtonPropTypes;

export default StartButton;
