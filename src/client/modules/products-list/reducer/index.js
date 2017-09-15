import actionTypes from '../action-types';
import { Map, List, fromJS } from 'immutable';

const initialState = List();

const getNewId = state => (state.maxBy(v => v.get('id')) || Map({ id: -1 })).get('id') + 1;

const withIndexById = (state, id, delegate) =>
{
  const index = state.findIndex(o => o.get('id') === id);

  return index === -1 ? state : delegate(index);
};

export default (state = initialState, action) =>
{
  switch(action.type)
  {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fromJS(action.products);

    case actionTypes.ADD_PRODUCT:
      return state.push(Map({
        id: getNewId(state),
        title: ''
      }));

    case actionTypes.REMOVE_PRODUCT:
      return withIndexById(state, action.id, index => state.delete(index))

    case actionTypes.UPDATE_PRODUCT_TITLE:
      return withIndexById(state, action.id, index => state.setIn([index, 'title'], action.title))

    default:
      return state;
  }
};
