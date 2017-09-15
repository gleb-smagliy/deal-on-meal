import React from 'react';
import Sinon from 'sinon';
import { List, Input, Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import ProductsListItem from './products-list-item.jsx';

const fakeProps = ({ onButtonClick, onChange }) => ({
  onButtonClick,
  onChange,
  id: 1,
  title: '#1'
});

describe('<ProductsListItem />', () =>
{
  it('Should be List.Item', () => {
    const props = fakeProps({ onButtonClick: Sinon.spy(), onChange: Sinon.spy() });
    const productsListItem = shallow(<ProductsListItem  {...props}/>);

    expect(productsListItem.type()).toEqual(List.Item);
  });

  it('Should call onButtonClick when button is clicked', () => {
    const props = fakeProps({ onButtonClick: Sinon.spy(), onChange: Sinon.spy() });
    const productsListItem = shallow(<ProductsListItem  {...props}/>);

    productsListItem.find(Button).simulate('click');

    expect(props.onButtonClick.calledOnce).toEqual(true);
  });

  it('Should call onChange when input value is changed', () => {
    const props = fakeProps({ onButtonClick: Sinon.spy(), onChange: Sinon.spy() });
    const productsListItem = shallow(<ProductsListItem  {...props}/>);

    productsListItem.find(Input).simulate('change', {}, {value: 'aaa'});

    expect(props.onChange.calledOnce).toEqual(true);
  });
});
