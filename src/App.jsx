import { useState } from 'react'

const Header = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({name, value}) => {
  return (
    <>
      <div>{name} {value}</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
  setGood(good + 1)
  }

  const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
  setBad(bad + 1)
  }

  return (
    <div>
      <Header text={'give feedback'} />
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      
      <Header text={'statistics'} />
      <StatisticLine name={'good'} value={good} />
      <StatisticLine name={'neutral'} value={neutral} />
      <StatisticLine name={'bad'} value={bad} />
      <StatisticLine name={'all'} value={good + neutral + bad} />
      <StatisticLine name={'average'} value={(good - bad) / (good + bad + neutral)} />
      <StatisticLine name={'positive'} value={100 * (good / (good + bad + neutral)) } />
    </div>
  )
}

export default App