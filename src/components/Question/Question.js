import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div className="question">
      <div>
        <h1>How react works?</h1>
        <p>
          React is a javascript library that creates a user interface in an
          efficient way using declarative code. Declarative code means what we
          want to do instead of how to do it. When JSX code renders react create
          a virtual DOM which is the copy of real DOM. Virtual DOM is much
          faster than real DOM because this is not shown on the screen. React
          compare updated virtual DOM with before updated Virtual DOM. And
          figure out which objects are changed. Then react will update those
          changes only.
        </p>
      </div>
      <div>
        <h1>Difference between state and props?</h1>
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>State</th>
              <th>Props</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>State is mutable</td>
              <td>Props are immutable</td>
            </tr>
            <tr>
              <td>1</td>
              <td>The Data is passed only the own component.</td>
              <td>The Data is passed from one component to another.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>State cannot make components reusable.</td>
              <td>Props make components reusable.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>State is both read and write</td>
              <td>Props are read-only</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                State can be used for lisening dynamic cahanges with the
                component
              </td>
              <td>Props can be used for communicate other component</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question;
