import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowProgram from './WindowProgram';
import Select from '../Inputs/Select';
import OptionsList from './OptionsList';
import './styles/WindowExplorer.scss';

class WindowExplorer extends React.Component {
  state = {
    isMaximized: false,
  }

  maximize = () => this.setState({ isMaximized: true });
  restore = () => this.setState({ isMaximized: false });
  render() {
    const { props } = this;
    return (
      <WindowProgram
        className={ cx('WindowExplorer window--explorer', props.className)}
        icon={props.icon}
        onClose={props.onClose}
        onMaximize={props.onMaximize}
        onMinimize={props.onMinimize}
        onRestore={props.onRestore}
        title={props.title}
        resizable={props.resizable}
        footer={props.footer}
        menuOptions={props.menuOptions}
      >
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
      </WindowProgram>
    );
  }
}

WindowExplorer.defaultProps = {
  footer: [],
  menuOptions: [],
};

WindowExplorer.propTypes = {
  ...WindowProgram.propTypes,
  menuOptions: PropTypes.arrayOf(
    PropTypes.any,
  ),
  explorerOptions: PropTypes.shape(OptionsList.propTypes.options),
};

export default WindowExplorer;
