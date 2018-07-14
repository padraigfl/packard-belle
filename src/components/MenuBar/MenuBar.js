
import React from 'react';
import Button from '../Button/AbstractButton';
import ListMenu from '../ListMenu/ListMenu';
import '../../_scss/w98/window.scss';

const MenuBar = props => (
  <div className="window__menu MenuBar">
    { props.options && (
        props.options.map( section => (
          <div className="window__menu__section MenuBar__section" key={`MenuBar-section-${section.title}`}>
            <Button>{section.title}</Button>
            { section.options && <ListMenu className="window__menu__dropdown" options={section.options} /> }
          </div>
        ))
      )
    }
  </div>
);

export default MenuBar;
