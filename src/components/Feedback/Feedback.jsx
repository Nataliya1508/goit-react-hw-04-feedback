import React from "react";
import { Component } from "react";
import styles from './feedback.module.css';
import Wrapper from "./Wrapper";
import ActionsFeedback from "./ActionsFeedback";
import ResultsFeedback from "./ResultsFeedback";
import  Notification  from "./NotificationFeedback";

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    
    }

    countTotal() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

     countPercentage = () => {
    const total = this.countTotal();
    const value = this.state.good;
    const result = (value / total) * 100;
    return Number(result.toFixed(0));
  }
 
 
      leaveFeedback = (typeFeedback) => {
        this.setState((prevState) => {
            const value = prevState[typeFeedback];
            return {
                [typeFeedback]: value + 1
            }
        })
    }


    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotal();
        const positivePercent = this.countPercentage();
        
        return (
            <div className={styles.sections}>
                <Wrapper title="Please leave feedback">
        
                    <ActionsFeedback options={Object.keys(this.state)} leaveFeedback={this.leaveFeedback}/>
                
                   
                </Wrapper>
                <Wrapper title="Statistics">
                    {!total ? <Notification message="There is no feedback"/>:
                        <ResultsFeedback 
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercent={positivePercent}
                    />}
                </Wrapper>
                    </div>
                      
            
        )
    }
}