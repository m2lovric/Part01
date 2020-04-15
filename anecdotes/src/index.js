import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  let [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
  );

  const handleClick = () => {
    setSelected(selected = Math.floor(Math.random() * 6));
  }

  const handleVote = (el) => {
    const data = {...votes};
    data[el] += 1;
    setVotes(data);
  }

  const getMax = () => {
    const value = Object.values(votes);
    const index = value.indexOf(Math.max(...value));
    const maxVotes = Math.max(...value);
    return (
      <div>
        <p>{anecdotes[index]}</p>
        <p>has {maxVotes} votes</p>
      </div>
    )
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={() => handleVote(selected)}>vote</button>
      <h1>Anecdote with most votes</h1>
      {
        getMax()
      }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById('root')
);
