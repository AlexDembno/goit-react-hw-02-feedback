import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  render() {
    const { text } = this.props;
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            buttonName={Object.keys(this.state)}
            increment={this.increment}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad !== 0 ? (
            <Statistics
              text={text}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default FeedBack;
