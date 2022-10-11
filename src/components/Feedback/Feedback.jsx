import { useState } from "react";
import styles from './feedback.module.css';
import Wrapper from "./Wrapper";
import ActionsFeedback from "./ActionsFeedback";
import ResultsFeedback from "./ResultsFeedback";
import Notification from "./NotificationFeedback";


export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotal = () => {
       return good + neutral + bad;
    }
    const countPercentage = () => {
        const total = countTotal();
        const result = (good / total) * 100;
        return Number(result.toFixed(0));
    }

       const leaveFeedback = (typeFeedback) => {
      
           switch (typeFeedback) {
               case "good":
                   return setGood((prev) => prev + 1);
                case "neutral":
                   return setNeutral((prev) => prev + 1);
                case "bad":
                   return setBad((prev) => prev + 1);
               default: return;
           }
    }

    const total = countTotal();
   
        const positivePercent = countPercentage();
        
        return (
            <div className={styles.sections}>
                <Wrapper title="Please leave feedback">
        
                    <ActionsFeedback options={["good", "neutral", "bad"]} leaveFeedback={leaveFeedback}/>
                
                   
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
