import React from 'react';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar/MenuBar';
import Select from '../Inputs/Select';
import './_explorer-window';

const ExplorerWindow = props => (
  <Window
    className={classnames('ExplorerWindow', props.className)}
    icon={props.icon}
    onClose={props.onClose}
    onMaximize={props.onClose}
    onMinimize={props.onMaximize}
    title={props.title}
  >
    <MenuBar className="ExplorerWindow__menu" options={props.menuOptions} />
    <div className="ExplorerWindow__options">Options</div>
    <div className="ExplorerWindow__address">
      <div className="ExplorerWindow__address__title">Address</div>
      <Select />
    </div>
    <div className="ExplorerWindow__view">Icons</div>
    {/* <div className="ExplorerWindow__details">
      <div className="ExplorerWindow__details__section" />
      <div className="ExplorerWindow__details__section" />
    </div> */}
  </Window>
);

export default ExplorerWindow;
