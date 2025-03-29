// 1. Single Responsibility Principle (SRP)
// Each component should have only one reason to change.

import { useState } from "react";

export function UseCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}
