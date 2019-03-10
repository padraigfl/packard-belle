import React from 'react';
import cx from 'classnames';
import AbstractIcon, { iconProps } from './AbstractIcon';
import './styles/ExplorerIcon.scss';

const ExplorerIcon = props => (
  <AbstractIcon
    onClick={props.onClick}
    onDoubleClick={props.onDoubleClick}
    onContextMenu={props.onContextMenu}
    alt={props.alt}
    className={cx('ExplorerIcon', props.className)}
    icon={props.icon}
    title={props.title}
    href={props.href}
  />
);

ExplorerIcon.propTypes = iconProps;

export default ExplorerIcon;
