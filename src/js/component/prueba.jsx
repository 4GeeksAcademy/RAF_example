import React from 'react';
import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Incrementa el contador de clics
        return c + 1;        
      } else {
        // El resto no ha cambiado
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}
