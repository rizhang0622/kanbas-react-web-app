// src/Labs/Lab3/FunctionDestructing.tsx
import React from "react";

export default function FunctionDestructing() {
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    
    return (
        <div id="wd-function-destructing">
            <h2>Function Destructing</h2>
            <pre>
                {`const add = (a, b) => a + b;`}
            </pre>
            <br />
            <pre>
                {`const sum = add(1, 2);`}
            </pre>
            <br />
            <pre>
                {`const subtract = ({ a, b }) => a - b;`}
            </pre>
            <br />
            <pre>
                {`const difference = subtract({ a: 4, b: 2 });`}
            </pre>
            <br />
            sum = {sum}<br />
            difference = {difference}<hr />
        </div>
    );
}
