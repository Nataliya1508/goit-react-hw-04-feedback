import React from "react";
import PropTypes from "prop-types";
import styles from './feedback.module.css';

export default function Notification  ({ message }){
    return (
        <div className={styles.message}>
        {message}
    </div>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}