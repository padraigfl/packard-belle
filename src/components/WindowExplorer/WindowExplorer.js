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
    const { explorerOptions, children, customSelect, ...props } = this.props;
    return (
      <WindowProgram
        {...props}
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
        {explorerOptions && (
          <OptionsList
            className="WindowExplorer__options"
            options={explorerOptions}
          />
        )}
        <menu className="WindowExplorer__address">
          <div className="WindowExplorer__address__title">Address</div>
          {customSelect ? (
            customSelect()
          ) : (
            <Select title={props.title} icon={props.icon} isDisabled />
          )}
        </menu>
        <div className="WindowExplorer__view">{children}</div>
      </WindowProgram>
    );
  }
}

WindowExplorer.propTypes = {
  ...WindowProgram.propTypes,
  explorerOptions: OptionsList.propTypes.options,
};

export default WindowExplorer;
