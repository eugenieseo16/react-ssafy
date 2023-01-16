/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState, useReducer } from 'react';

enum ActionTypes {
  pending = 'fetch/pending',
  resolved = 'fetch/resolved',
  rejected = 'fetch/rejected',
}

function reducer(state: any, action: { type: string; payload?: any }) {
  switch (action.type) {
    case ActionTypes.pending:
      return { ...state, isLoading: true };
    case ActionTypes.resolved:
      return { ...state, data: action.payload };
    case ActionTypes.rejected:
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
}

export const useFetchReducer = (initialUrl: any, initialData: any) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: ActionTypes.pending });

      try {
        const response = await fetch(url);
        const json = await response.json();
        dispatch({ type: ActionTypes.resolved, payload: json });
      } catch (error) {
        dispatch({ type: ActionTypes.rejected, payload: error });
      }
    }

    fetchData();
  }, [url]);

  return [state, setUrl];
};
