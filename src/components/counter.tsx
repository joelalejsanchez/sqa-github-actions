import { useState } from "react";

interface Props {
  title: string;
  start: number;
  step?: number;
  min?: number;
  max?: number;
}
export default function Counter({
  title,
  start,
  step = 1,
  max = 100,
  min = 0,
}: Props) {
  const [count, setCount] = useState(start);
  function increment() {
    if (count > max - step) return;
    setCount(count + step);
  }
  function decrement() {
    if (count < min + step) return;
    setCount(count - step);
  }
  return (
    <div>
      <h3 data-testid="title">{title.toUpperCase()}</h3>
      <span>{count}</span> <button onClick={decrement}>-{step}</button>
      <button onClick={increment}>+{step}</button>
    </div>
  );
}
