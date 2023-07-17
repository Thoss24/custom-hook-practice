import React, { useState, useEffect } from "react";

const useCounter = (count = true) => {
    const [counter, setCounter] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
        if (count === true) {
            setCounter(countVal => countVal + 1)
        } else {
            setCounter(countVal => countVal - 1)
        }
    }, 1000)

    return () => clearInterval(interval)
   }, []);

   return counter

};

export default useCounter;