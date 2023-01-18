import { createContext, useContext, useState, useCallback } from 'react';

type CounterContextType = {
  count: number;
  increment?: () => void;
  decrement?: () => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

// Wrapper Component
export const CounterProvider = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const value: CounterContextType = {
    count,
    increment,
    decrement,
  };

  return <CounterContext.Provider value={value} {...props} />;
};

// Custom Hook
export const useCounter = () => {
  const counterValue = useContext(CounterContext);
  if (!counterValue) {
    throw new Error(
      'useCounter 훅은 CounterProvider 안에 감싸진 영역 안에서만 사용 가능합니다.'
    );
  }
  return counterValue;
};
