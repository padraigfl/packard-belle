import React from 'react';
import classnames from 'classnames';
import Start from '../Button/StartButton';
import standardMenuWrapper from '../StandardMenu/withMenuWrapper';

const Started = standardMenuWrapper(Start);

const StartMenu = (props) => {
  const { className, ...otherProps } = props;
  return (
    <Started
      className={
        classnames('start-menu TaskBar__start', className)
      }
      {...otherProps}
    />
  );
};

StartMenu.propTypes = Started.propTypes;

export default StartMenu;
