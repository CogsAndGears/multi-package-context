import React, { useContext } from 'react';

import MyContext from './mycontext';

export default function InternalConsumer(): JSX.Element {
  const myContext = useContext(MyContext);  

  const myNumber = myContext.someFunction();

  return (
    <div>
      <div>From Internal Consumer</div>
      <span>My string is: {myContext.someString}</span>
      <span>My number is: {myNumber}</span>
    </div>
  );
}
