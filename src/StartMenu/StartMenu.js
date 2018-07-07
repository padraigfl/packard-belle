import React from 'react';
import classnames from 'classnames';
import Start from '../Button/StartButton';
import ListMenu from '../ListMenu/ListMenu';
import './_start-menu';

const StartMenu = props => (
  <div className="StartMenu">
    <Start />
    <ListMenu
      className={classnames('StartMenu__primary', props.className)}
      options={props.options}
    />
  </div>
);

export default StartMenu;
