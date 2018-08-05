import React from 'react';
import Notifiations from './Notifications';
import StartMenu from '../StartMenu';
import ProgramButton from '../Button/ProgramButton';
import SmallIconButton from '../Button/SmallIconButton';

import '../../_scss/w98/task-bar.scss';

const TaskBar = (props) => {
  return (
    <div className="task-bar">
      <StartMenu
        options={props.options}
      />
      {
        props.quickLaunch && (
          <div className="task-bar__quick-launch">
            {
              props.quickLaunch.map(qlEntry =>
                <SmallIconButton
                  key={ `${qlEntry.icon}-QuickLaunch` }
                  alt={ qlEntry.alt }
                  onClick={ qlEntry.onClick }
                  icon={ qlEntry.icon }
                />
              )
            }
          </div>
        )
      }
      {
        props.openWindows && (
          <div className="task-bar__programs">
            {
              props.openWindows.map(openWindow =>
                <ProgramButton
                  isActive={ openWindow.isActive }
                  onClick={ openWindow.onClick }
                  icon={ openWindow.icon }
                  key={ `${openWindow.icon}-ProgramButton-${openWindow.title}` }
                >
                  { openWindow.title }
                </ProgramButton>
              )
            }
          </div>
        )
      }
      <Notifiations notifiers={props.notifiers} />
    </div>
  )
};

export default TaskBar;
