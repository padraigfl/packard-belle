import React from 'react';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar/MenuBar';
import Select from '../Inputs/Select';
import './_explorer-window.scss';

const ExplorerWindow = props => (
  <Window
    className={classnames('window--explorer', props.className)}
    icon={props.icon}
    onClose={props.onClose}
    onMaximize={props.onClose}
    onMinimize={props.onMaximize}
    title={props.title}
  >
    <MenuBar className="window--explorer__menu" options={props.menuOptions} />
    <div className="window--explorer__options">Options</div>
    <div className="window--explorer__address">
      <div className="window--explorer__address__title">Address</div>
      <Select />
    </div>
    <div className="window--explorer__view">Icons</div>
    {/* <div className="ExplorerWindow__details">
      <div className="ExplorerWindow__details__section" />
      <div className="ExplorerWindow__details__section" />
    </div> */}
  </Window>
);

export default ExplorerWindow;
