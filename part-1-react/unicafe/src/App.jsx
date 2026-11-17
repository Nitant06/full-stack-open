import { useState } from "react";

// Reusable feedback button
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// Displays one statistic as a table row
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

// Displays all feedback statistics
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  const average = (props.good - props.bad) / all;

  const positive = (props.good / all) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />

        <StatisticLine text="neutral" value={props.neutral} />

        <StatisticLine text="bad" value={props.bad} />

        <StatisticLine text="all" value={all} />

        <StatisticLine text="average" value={average} />

        <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
      </tbody>
    </table>
  );
};

// Main application
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>

      <Button
        handleClick={() => setGood((previous) => previous + 1)}
        text="good"
      />

      <Button
        handleClick={() => setNeutral((previous) => previous + 1)}
        text="neutral"
      />

      <Button
        handleClick={() => setBad((previous) => previous + 1)}
        text="bad"
      />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
