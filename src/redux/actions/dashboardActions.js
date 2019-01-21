import { bindActionCreators } from 'redux';
import store from '../store/store';
import { dashboardActionTypes } from '../../constants';

const getProductListOnDashboard = (userType, userId) => (dispatch) => {
    dispatch({ type: dashboardActionTypes.getProductList, payload: [
      {category: 'fruit', sku: 1100, title: 'Apple (Fuji)' ,price: 1.99, pic: 'apple_fiji.jpg'},
      {category: 'fruit', sku: 1101, title: 'Apple (Honey Crisp) Organic', price: 3.99, pic: 'apple_honey_crisp.jpg'},
      {category: 'fruit', sku: 1102, title: 'Apple (Pink Lady)', price: .99, pic: 'apple_pink_lady.jpg'},
      {category: 'dairy', sku: 1103, title: 'Milk (Almond)', price: 4.99, pic: 'milk_almond.jpg'},
      {category: 'dairy', sku: 1104, title: 'Heavy Cream', price: 7.99, pic: 'heavy_cream.jpg'},
      {category: 'dairy', sku: 1105, title: 'Milk (Cow) Organic', price: 5.99, pic: 'milk_cow.jpg'},
      {category: 'meat', sku: 1106, title: 'Beef (Ribeye) USDA Prime', price: 55.99, pic: 'beef_ribeye.jpg'},
      {category: 'meat', sku: 1107, title: 'Beef (Ground) USDA Choice', price: 12.99, pic: 'beef_ground.jpg'},
      {category: 'meat', sku: 1108, title: 'Chicken (Thigh) Organic', price: 4.99, pic: 'chicken_thigh.jpg'},
      {category: 'meat', sku: 1109, title: 'Bacon (Applewood Smoked)', price: 7.99, pic: 'bacon_applewood_smoked.jpg'},
      {category: 'bread', sku: 1110, title: 'Loaf (Brioche)', price: 5.99, pic: 'loaf_brioche.jpg'},
      {category: 'bread', sku: 1111, title: 'Loaf (Sourdough)', price: 3.99, pic: 'loaf_sourdough.jpg'},
      {category: 'bread', sku: 1112, title: 'Loaf (7 Grain)', price: 4.99, pic: 'loaf_grain.jpg'},
      {category: 'snack', sku: 1113, title: 'Kit Kat', price: .45, pic: 'kitkat.jpg'},
      {category: 'snack', sku: 1114, title: 'Dried Apricot', price: 7.99, pic: 'dried_apricot.jpg'},
      {category: 'snack', sku: 1115, title: 'Larabar (Peanut Butter)', price: .99, pic: 'larabar_peanut.jpg'},
      ]});
};

const addItemToCardList = (item) => (dispatch) => {
    dispatch({ type: dashboardActionTypes.addItemToCardList, payload: item } );
};

const dashboardActions = bindActionCreators(
  {
    getProductListOnDashboard,
    addItemToCardList
  },
  store.dispatch
);

export default dashboardActions;
