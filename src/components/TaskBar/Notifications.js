import React from 'react';
import PropTypes from 'prop-types';
import Notifier from './Notifier';

const INTERVALS = 20000;

const formatTime = date => {
  let hour = date.getHours();
  let min = date.getMinutes();

  if (hour < 10) { hour = '0' + hour; }
  if (min < 10) { min = '0' + min; }

  return hour+':'+min;
};

class Time extends React.Component {
  state = {
    time: this.props.time? new Date(this.props.time) : new Date(),
  }

  componentDidMount() {
    if (!this.props.fixedTime) {
      this.timerId = setInterval(() => {
        this.getDate();
      }, INTERVALS);
    }
  }

  componentWillUnmount() {
    if(this.timerId) {
      clearInterval(this.timerId);
    }
  }

  getDate() {
    this.setState({ time: new Date(this.state.time.getTime() + INTERVALS) });
  }

  render() {
    return (
      <div className="TaskBar__notifications__time">
        { formatTime(this.state.time) }
      </div>
    );
  }
}

const Notifications = props => (
  <div className="TaskBar__notifications">
    {
      props.notifiers.map( notifier => (
        <Notifier
          key={notifier.alt}
          icon={notifier.icon}
          onClick={notifier.onClick}
          title={notifier.alt}
        />
      ))
    }
    <Time />
  </div>
);

Notifications.propsTypes = {
  notifiers: PropTypes.arrayOf(PropTypes.shape(Notifier.propTypes)),
};

Notifications.defaultProps = {
  notifiers: [],
};

export default Notifications;
