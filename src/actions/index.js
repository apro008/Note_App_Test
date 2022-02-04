export const incCounter = num => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const decCounter = num => {
  return {
    type: 'DECREMENT',
    payload: num,
  };
};
