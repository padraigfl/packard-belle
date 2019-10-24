import React from 'react';
import cx from 'classnames';
import WindowProgram from '../WindowProgram';
import Select from '../FormFakeSelect';
import OptionsList from '../ResizableIconsList';
import './_WindowExplorer.scss';

class WindowExplorer extends React.Component {
  static defaultProps = {
    footer: [],
    menuOptions: [],
  };

  render() {
    const { props } = this;
    return (
      <WindowProgram
        className={cx('WindowExplorer', props.className)}
        icon={props.icon}
        onClose={props.onClose}
        onMinimize={props.onMinimize}
        onMaximize={props.onMaximize}
        onRestore={props.onRestore}
        title={props.title}
        resizable={props.resizable}
        footer={props.footer}
        menuOptions={props.menuOptions}
        maximizeOnOpen={props.maximizeOnOpen}
        changingState={props.changingState}
      >
        {props.explorerOptions && (
          <OptionsList
            className="WindowExplorer__options"
            options={props.explorerOptions}
          />
        )}
        <menu className="WindowExplorer__address">
          <div className="WindowExplorer__address__title">Address</div>
          {props.customSelect ? (
            props.customSelect()
          ) : (
            <Select title={props.title} icon={props.icon} isDisabled />
          )}
        </menu>
        <div className="WindowExplorer__view">{props.children}</div>
      </WindowProgram>
    );
  }
}

WindowExplorer.propTypes = {
  ...WindowProgram.propTypes,
  explorerOptions: OptionsList.propTypes.options,
};

export default WindowExplorer;
