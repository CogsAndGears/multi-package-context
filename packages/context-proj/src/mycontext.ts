import React from 'react';

export interface MyContextType {
  someString: string,
  someFunction: () => number,
}

const MyContext = React.createContext<MyContextType>({
  someString: 'default string',
  someFunction: () => 0,
});

export default MyContext;
