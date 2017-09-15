import React from 'react';
import Sinon from 'sinon';
import { Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import AddProduct from './add-product.jsx';

const fakeProps = ({ onClick }) => ({
  buttonText: 'Click me!',
  onClick
});

describe('<AddProduct />', () => {
  it('Is a Button with specified in props label', () => {
    const props = fakeProps({ onClick: Sinon.spy() })
    const addProduct = shallow(<AddProduct  {...props}/>);

    expect(addProduct.find(Button).html()).toContain(props.buttonText);
  });

  it('Should fire onClick when clicked', () => {
    const props = fakeProps({ onClick: Sinon.spy() })
    const addProduct = shallow(<AddProduct  {...props}/>);

    addProduct.find(Button).simulate('click');
    expect(props.onClick.calledOnce).toEqual(true);
  });
});
