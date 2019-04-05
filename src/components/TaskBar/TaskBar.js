import React from 'react';
import PropTypes from 'prop-types';
import Notifiations from './Notifications';
import StartMenu from '../StartMenu';
import ButtonProgram from '../ButtonProgram';
import ButtonIconSmall from '../ButtonIconSmall';

import './_TaskBar.scss';

const TaskBar = props => (
  <div className="TaskBar">
    <StartMenu className="TaskBar__start" options={props.options} />
    {props.quickLaunch && (
      <div className="TaskBar__quick-launch">
        {props.quickLaunch.map(qlEntry => (
          <ButtonIconSmall
            key={`${qlEntry.icon}-QuickLaunch`}
            alt={qlEntry.alt}
            onClick={qlEntry.onClick}
            icon={qlEntry.icon}
          />
        ))}
      </div>
    )}
    <div className="TaskBar__programs">
      {props.openWindows &&
        props.openWindows.map(openWindow => (
          <ButtonProgram
            isActive={openWindow.isActive}
            onClick={openWindow.onClick}
            icon={openWindow.icon}
            key={`${openWindow.icon}-ButtonProgram-${openWindow.title}`}
          >
            {openWindow.title}
          </ButtonProgram>
        ))}
    </div>
    <Notifiations notifiers={props.notifiers} />
  </div>
);

TaskBar.propTypes = {
  options: PropTypes.array,
  quickLaunch: PropTypes.arrayOf(PropTypes.shape(ButtonIconSmall.propTypes)),
  openWindows: PropTypes.arrayOf(PropTypes.shape(ButtonProgram.propTypes)),
  notifiers: PropTypes.arrayOf(PropTypes.shape(Notifiations.propsTypes)),
};

export default TaskBar;
