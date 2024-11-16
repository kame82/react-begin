import { useState } from "react";

type UseCountUpDown = () => {
  count: number;
  countUpButton: () => void;
  countDownButton: () => void;
};

export const CountUpDown: UseCountUpDown = () => {
  const [count, setCount] = useState(0);

  const countUpButton = () => {
    setCount((prev) => {
      if (prev < 5) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const countDownButton = () => {
    setCount((prev) => {
      if (prev > -5) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  return {
    count,
    countUpButton,
    countDownButton,
  };
};
