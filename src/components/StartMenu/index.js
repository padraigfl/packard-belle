import React from 'react';
import classnames from 'classnames';
import Start from '../Button/StartButton';
import contextMenuWrapper from '../ContextMenu/withContextMenuWrapper';

const Started = contextMenuWrapper(Start);

const StartMenu = (props) => {
  const { className, ...otherProps } = props;
  return (
    <Started
      className={
        classnames('start-menu task-bar__start', props.className)
      }
      {...otherProps}
    />
  );
}

export default StartMenu;
