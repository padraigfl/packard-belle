import React from 'react';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar/MenuBar';
import Select from '../Inputs/Select';
import LargeIconButton from '../Button/LargeIconButton';
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
    <section>
      <MenuBar
        className="window--explorer__menu"
        options={props.menuOptions}
      />
    </section>
    { props.explorerOptions && (
      <section className="window--explorer__options">
        { props.explorerOptions.map( option => (
          <LargeIconButton
            icon={ option.icon }
            title={ option.title }
            onClick={ option.onClick }
            disabled={ !option.onClick }
          />
        ))}
      </section>
    )}
    <section className="window--explorer__address">
      <div className="window--explorer__address__title">Address</div>
      <Select placeholder="title" isDisabled/>
    </section>
    <div className="window--explorer__view">Icons</div>
  </Window>
);

export default ExplorerWindow;
