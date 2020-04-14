import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({...parts}) => {
  return(
    <>
      {
        parts.parts.map((el, i) => {
          return <p key={i}>{el.name} {el.exercises}</p>
        })
      }
    </>
  )
}

const Total = ({...parts}) => {
  const data = parts.parts;
  let total = data[0].exercises + data[1].exercises + data[2].exercises;
  return(
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total  parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
