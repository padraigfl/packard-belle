import React from 'react';
import classnames from 'classnames';
import AbstractIcon, { iconProps } from './AbstractIcon';
import './_explorer-icon.scss';

const ExplorerIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    onDoubleClick={ props.onDoubleClick }
    onContextMenu={ props.onContextMenu }
    alt={ props.alt }
    className={ classnames('icon--explorer', props.className) }
    icon={ props.icon }
    title={ props.title }
  />
);

ExplorerIcon.propTypes = iconProps;

export default ExplorerIcon;
