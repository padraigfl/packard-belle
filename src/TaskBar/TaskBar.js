import React from 'react';
import Notifiations from './Notifications';
import StartMenu from '../StartMenu/StartMenu';
import ProgramButton from '../Button/ProgramButton';
import QuickLaunchButton from '../Button/QuickLaunchButton';

import './_task-bar';

const TaskBar = (props) => {
  return (
    <div className="task-bar">
      <div>
        <StartMenu
          options={props.options}
        />
      </div>
      {
        props.quickLaunch && (
          <div className="task-bar__quick-launch">
            {
              props.quickLaunch.map(qlEntry =>
                <QuickLaunchButton
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
      <Notifiations />
    </div>
  )
};

export default TaskBar;
