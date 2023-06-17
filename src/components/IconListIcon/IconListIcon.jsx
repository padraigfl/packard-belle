import React from 'react';
import cx from 'classnames';
import AbstractIcon, { iconProps } from '../Icon/Icon';
import './_ListIcon.scss';

const ListIcon = props => (
  <AbstractIcon
    {...props}
    onClick={props.onClick}
    onDoubleClick={props.onDoubleClick}
    onContextMenu={props.onContextMenu}
    alt={props.alt}
    icon={props.icon}
    title={props.title}
    value={props.value}
    href={props.href}
    className={cx('ListIcon', props.className)}
  />
);

ListIcon.propTypes = iconProps;

export default ListIcon;
