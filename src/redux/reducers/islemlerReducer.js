import actionTypes from "../action/actionTypes";

/*
1. initial(başlangıç state i oluştur)
2.reducer'ı yaz

*/

const initialState = {
  start: false,
  success: false,
  islemler: [],
  fail: false,
  error: "",
};
//reducer: bir fonksiyondur.İşlevi kendisine gelen
//action'ın type' ına göre ilgili state' te değişiklik yapmaktır.

const islemlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_İSLEMLER_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.FETCH_İSLEMLER_SUCCESS:
      return {
        ...state,
        start: false,
        fail: false,
        error: "",
        success: true,
        islemler: action.payload,
      };
    case actionTypes.FETCH_ISLEMLER_FAIL:
      return {
        ...state,
        start: false,
        success: false,
        fail: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default islemlerReducer;
