import React from 'react';
import classnames from 'classnames';
import AbstractIcon, { iconProps } from './AbstractIcon';
import './styles/ExplorerIcon.scss';

const ExplorerIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    onDoubleClick={ props.onDoubleClick }
    onContextMenu={ props.onContextMenu }
    alt={ props.alt }
    className={ classnames('ExplorerIcon', props.className) }
    icon={ props.icon }
    title={ props.title }
  />
);

ExplorerIcon.propTypes = iconProps;

export default ExplorerIcon;
