export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "Start":
      return { ...initialState, loading: true };
      break;
    case "Success":
      return {
        ...initialState,
        catImage: action.payload,
        error: "",
        loading: false,
      };
    case "Fail":
      return {
        ...initialState,
        catImage: "",
        error: action.payload,
        loading: false,
      };
    default:
      break;
  }
};
//? action
//!  {type:"Start"}
//!  {type:"Success", payload:catImage}