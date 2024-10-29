import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    // Fetch the initial counter value from the backend on component mount
    useEffect(() => {
        fetch('/get_counter')
            .then(response => response.json())
            .then(data => setCount(data.counter))
            .catch(error => console.error('Error fetching counter:', error));
    }, []);

    // Increment counter by calling backend
    const increment = () => {
        fetch('/increment', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => setCount(data.counter))
            .catch(error => console.error('Error incrementing counter:', error));
    };

    // Reset counter by calling backend
    const reset = () => {
        fetch('/reset', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => setCount(data.counter))
            .catch(error => console.error('Error resetting counter:', error));
    };

    return (
        <div className="container">
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default App;
