import PropTypes from 'prop-types';

import style from './Notification.module.css';

function Notification({ message }) {
  return <p className={style.text}>{message}</p>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
