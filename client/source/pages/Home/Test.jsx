import React, { useState, useEffect } from 'react';

import { someFunc } from '../../utils/utils.js';

const Test = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handler = (status) => {
      setCount(status.count);
    };
    someFunc('hello', handler);
    document.title = `${count} is the title`;
    return () => {
      console.log('calling callback');
    };
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>clicked</button>
    </div>
  );
};

export default Test;
