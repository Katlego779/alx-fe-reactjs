import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ marginRight: '5px' }}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ marginRight: '5px' }}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
