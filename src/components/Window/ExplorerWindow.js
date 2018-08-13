import React from 'react';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar';
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
    <MenuBar
      className="window--explorer__menu"
      options={props.menuOptions}
    />
    {props.explorerOptions && (
      <menu className="window--explorer__options">
        {props.explorerOptions.map(option => (
          <LargeIconButton
            key={`large-button-${option.title}`}
            icon={option.icon}
            title={option.title}
            onClick={option.onClick}
            disabled={!option.onClick}
          />
        ))}
      </menu>
    )}
    <menu className="window--explorer__address">
      <div className="window--explorer__address__title">Address</div>
      <Select placeholder={<span>Test</span>} isDisabled />
    </menu>
    <div
      className="window--explorer__view"
      style={props.backgroundColor && ({
        backgroundColor: props.backgroundColor,
      })}
    >
      {props.children}
    </div>
    {props.footer && (
      <footer>
        {Array.isArray(props.footer) ?
          props.footer.map(entry => (
            <div
              key={entry.text}
              style={entry.icon && {
                backgroundImage: `url(${entry.icon})`,
              }}
            >
              {entry.text || 'Default'}
            </div>
          )) : props.footer
        }
      </footer>
    )}
  </Window>
);

export default ExplorerWindow;
