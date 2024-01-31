import React from 'react';
import cx from 'classnames';
import AbstractIcon, { iconProps } from '../Icon';
import './_ExplorerIcon.scss';

const ExplorerIcon = props => (
  <AbstractIcon
    {...props}
    onClick={props.onClick}
    onDoubleClick={props.onDoubleClick}
    onContextMenu={props.onContextMenu}
    alt={props.alt}
    icon={props.icon}
    title={props.title}
    href={props.href}
    className={cx('ExplorerIcon', props.className)}
  />
);

ExplorerIcon.propTypes = iconProps;

export default ExplorerIcon;
