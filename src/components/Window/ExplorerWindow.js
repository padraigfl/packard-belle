import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar';
import Select from '../Inputs/Select';
import OptionsList from './OptionsList';
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
      <OptionsList
        className="window--explorer__options"
        options={props.explorerOptions}
      />
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
              key={Math.random()}
              style={entry.icon && {
                backgroundImage: `url(${entry.icon})`,
              }}
            >
              {entry.text || ''}
            </div>
          )) : props.footer
        }
      </footer>
    )}
  </Window>
);

const footerType = {
  text: PropTypes.string,
  icon: PropTypes.string,
};

ExplorerWindow.propTypes = {
  ...Window.propTypes,
  menuOptions: PropTypes.arrayOf(
    PropTypes.any,
  ),
  explorerOptions: PropTypes.shape(OptionsList.propTypes.options),
  footer: PropTypes.oneOfType([
    PropTypes.shape(footerType),
    PropTypes.arrayOf(PropTypes.shape(footerType)),
  ]),
};

export default ExplorerWindow;
