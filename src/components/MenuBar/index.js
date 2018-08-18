
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button/AbstractButton';
import withMenuWrapper from '../StandardMenu/withMenuWrapper';
import '../../_scss/w98/window.scss';

const MenuEntry = withMenuWrapper(Button);

const MenuBar = props => (
  <menu className="window__menu menu-bar">
    {props.options && (
      props.options.map(section => (
        <MenuEntry
          className={
            classnames(
              'window__menu__section menu-bar__section',
              props.className
            )
          }
          key={`menu-bar-section-${section.title}`}
          options={section.options}
        >
          {section.title}
        </MenuEntry>
      ))
    )}
  </menu>
);

MenuBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
  className: PropTypes.string,
};

export default MenuBar;
