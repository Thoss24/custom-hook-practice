import { useState, useEffect } from "react";

const useCounter = (forwardFn) => { // the 'forwards' parameter could also be a function which does something, in this case it is a simple boolean value to set either addition or subtraction
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCounter(forwardFn());
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardFn]);

  return counter;
};

export default useCounter;
