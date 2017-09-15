import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';
import { mapDispatchToProps } from './';
import actionTypes from '../action-types';
import reducer from './';

describe('ProductsList reducer ', () => {
  it('Should be a function', () =>
  {
    expect(typeof reducer).toEqual('function');
  });

  it('Should return state with new product with empty title on ADD_PRODUCT', () =>
  {
    const before = fromJS([
      {
        id: 0,
        title: '#0'
      }
    ]);

    const after = fromJS([
      {
        id: 0,
        title: '#0'
      },
      {
        id: 1,
        title: ''
      }
    ]);

    expect(reducer(before, { type: actionTypes.ADD_PRODUCT })).toEqual(after);
  });

  it('Should return state with new product on ADD_PRODUCT when there are no products', () =>
  {
    const before = fromJS([]);

    const after = fromJS([
      {
        id: 0,
        title: ''
      }
    ]);

    expect(reducer(before, { type: actionTypes.ADD_PRODUCT })).toEqual(after);
  });

  it('Should return state without specified product on REMOVE_PRODUCT', () =>
  {
    const before = fromJS([
      {
        id: 0,
        title: '#0'
      },
      {
        id: 1,
        title: ''
      }
    ]);

    const after = fromJS([
      {
        id: 0,
        title: '#0'
      }
    ]);

    expect(reducer(before, { type: actionTypes.REMOVE_PRODUCT, id: 1 })).toEqual(after);
  });
});
