import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { AppDataTablePaginationPageComponent } from './component';
import { AppDataTablePaginationPageComponentPropsInterface } from './component-props.interface';

describe('AppDataTablePaginationPageComponent', () => {
  let props: AppDataTablePaginationPageComponentPropsInterface;
  let wrapper: ShallowWrapper<typeof props>;

  beforeEach(() => {
    props = {
      isActive: true,
      page: 1,
      onChange: jest.fn(),
    };

    wrapper = shallow(<AppDataTablePaginationPageComponent {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should add the "button-outline" class to the button when isActive property is set to true', () => {
    expect(wrapper.find('button').hasClass('button-outline')).toBe(true);

    wrapper.setProps({
      isActive: false,
    });

    expect(wrapper.find('button').hasClass('button-outline')).toBe(false);
  });

  it('should call a function passed as the onChange property when clicking the button', () => {
    wrapper.find('button').simulate('click');

    expect(props.onChange).toHaveBeenCalledWith({
      page: 1,
    });
  });
});
