import React, { useContext } from 'react';

import MyContext from './mycontext';

export default function InternalConsumer(): JSX.Element {
  const myContext = useContext(MyContext);  

  const myNumber = myContext.someFunction();

  return (
    <div>
      <h1>From Internal Consumer</h1>
      <ul>
        <li>My string is: {myContext.someString}</li>
        <li>My number is: {myNumber}</li>
      </ul>
    </div>
  );
}
