export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};
//! PURE JS FONKSIYON
//?Stateleri degistiren fonkslar pure fonksiyon olmalidir.

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "Start":
      return { ...initialState, loading: true };
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

//?rxreducer calls this reducer fonks
// const initialState = {}

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }

