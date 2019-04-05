import React from 'react';
import cx from 'classnames';
import AbstractIcon, { iconProps } from '../Icon/Icon';
import './_ListIcon.scss';

const ListIcon = props => (
  <AbstractIcon
    onClick={props.onClick}
    onDoubleClick={props.onDoubleClick}
    onContextMenu={props.onContextMenu}
    alt={props.alt}
    className={cx('ListIcon', props.className)}
    icon={props.icon}
    title={props.title}
    value={props.value}
    href={props.href}
  />
);

ListIcon.propTypes = iconProps;

export default ListIcon;
