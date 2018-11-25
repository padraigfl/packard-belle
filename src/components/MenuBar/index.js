
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/AbstractButton';
import withMenuWrapper from '../StandardMenu/withMenuWrapper';
import './MenuBar.scss';

const MenuEntry = withMenuWrapper(Button);

const MenuBar = props => (
  <menu className="window__menu MenuBar">
    {props.options && (
      props.options.map(section => (
        <MenuEntry
          className={
            cx(
              'MenuBar__section',
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
