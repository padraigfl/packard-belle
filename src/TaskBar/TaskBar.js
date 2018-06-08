import React from 'react';
import Notifiations from './Notifications';
import StartButton from '../Button/StartButton';

import './_task-bar';

const TaskBar = (props) => {
  return (
    <div className="task-bar">
      <div>
        <StartButton />
      </div>
      {/*
        props.openWindows.map(openWindow =>
          <ProgramButton
              title={ openWindow.title }
              isActive={ props.isActive }
              onClick={ props.onClick }
          />
        )
      } */}
      <div>
        Test
      </div>
      <div>
        Test
      </div>
      <Notifiations />
    </div>
  )
};

export default TaskBar;
