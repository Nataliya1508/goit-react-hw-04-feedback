import React from 'react';
import PropTypes from "prop-types";



export default function ResultsFeedback({ good, neutral, bad, total,positivePercent }) {
    return (
        <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {positivePercent} %</li>
                </ul>
    )
}

ResultsFeedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired,
}