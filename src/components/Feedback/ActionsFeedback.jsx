import React from 'react';
import PropTypes from "prop-types";

export default function ActionsFeedback({options, leaveFeedback}) {
  return (
    <>
      <div>
        {options.map(option => {
          const name = option[0] + option.slice(1);
          return <button key={option} type='button' onClick={() => leaveFeedback(option)}>{name}</button>
        })}
        {/* <button onClick={() => leaveFeedback("good")}>Good</button>
  
    
        <button onClick={() => leaveFeedback("neutral")}>Neutral</button>
          
          
        <button onClick={() => leaveFeedback("bad")}>Bad</button> */}
    </div>
</>
  )
}

ActionsFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};