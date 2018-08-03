
import React from 'react';
import classnames from 'classnames';
import Button from '../Button/AbstractButton';
import withContextWrapper from '../ContextMenu/withContextMenuWrapper';
import '../../_scss/w98/window.scss';

const MenuEntry = withContextWrapper(Button)

const MenuBar = props => (
  <menu className="window__menu menu-bar">
    { props.options && (
        props.options.map( section => (
          <MenuEntry
            className={
              classnames(
                'window__menu__section menu-bar__section',
                props.className,
              )
            }
            key={`menu-bar-section-${section.title}`}
            options={section.options}
          >
            { section.title }
          </MenuEntry>
        ))
      )
    }
  </menu>
);

export default MenuBar;
