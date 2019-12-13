import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import withMenuWrapper from '../StandardMenuHOC';
import './_MenuBar.scss';

const MenuEntry = withMenuWrapper(Button);

const MenuBar = props => {
  const { options, ...otherProps } = props;
  return (
    <menu className="window__menu MenuBar">
      {options &&
        options.map(section => (
          <MenuEntry
            {...otherProps}
            className={cx('MenuBar__section', props.className)}
            key={`menu-bar-section-${section.title}`}
            options={section.options}
          >
            {section.title}
          </MenuEntry>
        ))}
    </menu>
  );
};

MenuBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
  className: PropTypes.string,
};

export default MenuBar;
