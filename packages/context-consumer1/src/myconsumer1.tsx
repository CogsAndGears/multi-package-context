import React, { useContext } from 'react';

import { MyContext } from 'context-proj';

export default function MyConsumer1(): JSX.Element {
  const myContext = useContext(MyContext);  

  const myNumber = myContext.someFunction();

  return (
    <div>
      <div>From MyConsumer1</div>
      <span>My string is: {myContext.someString}</span>
      <span>My number is: {myNumber}</span>
    </div>
  );
}
