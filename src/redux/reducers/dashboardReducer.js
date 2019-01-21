import { dashboardActionTypes } from '../../constants';

const dashboardReducer = (state = {
  productList: [],
  currentCartList: []
}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case dashboardActionTypes.getProductList :
      newState.productList = action.payload;
      return newState;
    case dashboardActionTypes.addItemToCardList :
      let tempArr = newState.currentCartList.filter( item => item.sku === action.payload.sku);
      if (tempArr && tempArr.length>0){ // if same item then increment count
        newState.currentCartList = newState.currentCartList.map( item => {
          if(item.sku === action.payload.sku){
            item.quantity = item.quantity+1;
          }
          return item;
        })
      }else{
        action.payload['quantity'] = 1;
        newState.currentCartList = [...newState.currentCartList, action.payload] ;
      }
      return newState;
    default:
  }
  return state;
};
export default dashboardReducer;
