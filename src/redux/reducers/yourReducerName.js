export default (state = "", action) => {
  switch (action.type) {
    case "artist": {
      //todo your logic for what to get
      return state;
    }

    case "customer": {
      //todo all login here to get the data
      return state;
    }

    default: {
      //? return default state if no case valid
      return state;
    }
  }
};
