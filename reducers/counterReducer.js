// Initial State
const initialState = {
  counter: 0,
};

// Redux: Counter Reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER_ASYNC': {
      console.log('Positive Called');
      return {...state, counter: state.counter + action.value};
    }
    case 'DECREASE_COUNTER_ASYNC': {
      console.log('Negative Called');
      return {...state, counter: state.counter - action.value};
    }
    default: {
      return state;
    }
  }
};
