import React from 'react';
import Notifiations from './Notifications';
import StartButton from '../Button/StartButton';
import ProgramButton from '../Button/ProgramButton';

import './_task-bar';

const TaskBar = (props) => {
  return (
    <div className="task-bar">
      <div>
        <StartButton />
      </div>
      <div>
        Test
      </div>
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
