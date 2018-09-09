import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Window from './AbstractWindow';
import MenuBar from '../MenuBar';
import Select from '../Inputs/Select';
import OptionsList from './OptionsList';
import './styles/ExplorerWindow.scss';

const insertDefaultFooter = (customFooterElements, minimum) => {
  const footer = [...customFooterElements];
  for(let i = 0; i < minimum; i++) {
    footer[i] = footer[i] || { text: '' };
  }
  return footer;
};

const ExplorerFooter = props => (
  <footer>
    { props.entries.map((entry, idx) => (
      <div
        key={`${entry}-${idx}`}
        style={entry.icon && {
          backgroundImage: `url(${entry.icon})`,
        }}
      >
        {entry.text || ''}
      </div>
    ))}
  </footer>
);

const footerType = {
  text: PropTypes.string,
  icon: PropTypes.string,
};

ExplorerFooter.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape(footerType)),
};

const ExplorerWindow = props => {
  const footer = insertDefaultFooter(props.footer);
  return (
    <Window
      className={classnames('ExplorerWindow window--explorer', props.className)}
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
      <div className="window--explorer__view">
        {props.children}
      </div>
      <ExplorerFooter entries={footer} />
    </Window>
  );
};

ExplorerWindow.propTypes = {
  ...Window.propTypes,
  menuOptions: PropTypes.arrayOf(
    PropTypes.any,
  ),
  explorerOptions: PropTypes.shape(OptionsList.propTypes.options),
  footer: PropTypes.arrayOf(PropTypes.shape(footerType)),
};

export default ExplorerWindow;
