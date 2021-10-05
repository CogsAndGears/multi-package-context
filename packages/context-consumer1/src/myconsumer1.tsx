import React, { useContext } from 'react';

import { MyContext } from 'context-proj';

export default function MyConsumer1(): JSX.Element {
  const myContext = useContext(MyContext);  

  const myNumber = myContext.someFunction();

  return (
    <div>
      <h1>From MyConsumer1</h1>
      <ul>
        <li>My string is: {myContext.someString}</li>
        <li>My number is: {myNumber}</li>
      </ul>
    </div>
  );
}
