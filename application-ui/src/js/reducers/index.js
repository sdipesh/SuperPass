const initialState = {
  applications: []
};

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_APPLICATION":
      /*return Object.assign({}, state, {
        applications: state.applications.concat(action.payload)
      });*/
      return {
        ...state,
        applications: [...state.applications, action.payload]
      };
    case "UPDATE_APPLICATION":
      return {
        ...state,
        applications: state.applications.map(application =>
          application.id === action.payload.id
            ? // transform the one with a matching id
              action.payload
            : // otherwise return original todo
              application
        )
      };
    case "DELETE_APPLICATION":
      state.applications.splice(action.payload);
      return {
        ...state,
        applications: state.applications.filter(
          application => application.id !== action.payload.id
        )
      };
    case "LOAD_APPLICATIONS":
      return {
        ...state,
        applications: action.payload
      };
    default:
      return state;
  }
}

export default applicationReducer;
