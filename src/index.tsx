import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const App = () =>
{
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello, react app!</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)} type="button">Increment</button>
    </div>
  )
}

root.render(<App />);