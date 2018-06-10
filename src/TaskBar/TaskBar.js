import React from 'react';
import Notifiations from './Notifications';
import StartButton from '../Button/StartButton';
import ProgramButton from '../Button/ProgramButton';
import QuickLaunchButton from '../Button/QuickLaunchButton';

import './_task-bar';

const TaskBar = (props) => {
  return (
    <div className="task-bar">
      <div>
        <StartButton />
      </div>
      {
        props.quickLaunch && (
          <div className="task-bar__quick-launch">
            {
              props.quickLaunch.map(qlEntry =>
                <QuickLaunchButton
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
                    title={ openWindow.title }
                    isActive={ openWindow.isActive }
                    onClick={ openWindow.onClick }
                    icon={ openWindow.icon }
                />
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
