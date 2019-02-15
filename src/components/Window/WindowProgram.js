import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowAbstract from './WindowAbstract';
import MenuBar from '../MenuBar';
import './styles/WindowProgram.scss';

const insertDefaultFooter = (customFooterElements, minimum = 2) => {
  const footer = Array.isArray(customFooterElements)
    ? [...customFooterElements]
    : [];
  for (let i = 0; i < minimum; i++) {
    footer[i] = footer && footer.text ? footer[i] : { text: '' };
  }
  return footer;
};

const Footer = (props = []) => (
  <footer>
    {props.entries.map((entry, idx) => (
      <div
        key={`${entry}-${idx}`}
        style={
          entry.icon && {
            backgroundImage: `url(${entry.icon})`,
          }
        }
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

Footer.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape(footerType)),
};

class WindowProgram extends React.Component {
  state = {
    isMaximized: this.props.maximizeOnOpen,
  };

  maximize = e => {
    this.setState({ isMaximized: true });
    this.props.onMaximize && this.props.onMaximize(e);
  };

  restore = e => {
    this.setState({ isMaximized: false });
    this.props.onRestore && this.props.onRestore(e);
  };

  render() {
    const { props } = this;
    const footer = insertDefaultFooter(props.footer);
    return (
      <WindowAbstract
        className={cx('WindowProgram window--program', props.className)}
        icon={props.icon}
        onClose={props.onClose}
        onMinimize={props.onMinimize}
        onMaximize={this.maximize}
        onRestore={this.restore}
        title={props.title}
        resizable={props.resizable}
      >
        {Array.isArray(props.menuOptions) && (
          <MenuBar
            className="window--explorer__menu WindowProgram__menu"
            options={props.menuOptions}
          />
        )}
        {props.children}
        {props.footer && <Footer entries={footer} />}
      </WindowAbstract>
    );
  }
}

WindowProgram.propTypes = {
  ...WindowAbstract.propTypes,
  menuOptions: PropTypes.arrayOf(PropTypes.any),
  footer: PropTypes.arrayOf(PropTypes.shape(footerType)),
  maximizeOnOpen: PropTypes.bool,
};

export default WindowProgram;
