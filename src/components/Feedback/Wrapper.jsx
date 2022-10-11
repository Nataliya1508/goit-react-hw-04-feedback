import React from "react";
import PropTypes from "prop-types";
import styles from './feedback.module.css';

const Wrapper = ({title, children}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{title}</h2>
            {children}
        </div>
    )
}
Wrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Wrapper;