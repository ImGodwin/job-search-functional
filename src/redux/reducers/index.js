const initialState = {
  companies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        companies: {
          ...state.companies,
          content: [...state.companies.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
