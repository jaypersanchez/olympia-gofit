export const SELECT_PROGRAM_FREQUENCY = 'SELECT_PROGRAM_FREQUENCY';

export const selectProgramFrequency = (frequency) => {
  return {
    type: SELECT_PROGRAM_FREQUENCY,
    payload: frequency,
  };
};
