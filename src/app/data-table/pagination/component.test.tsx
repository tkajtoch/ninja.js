import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { AppDataTablePaginationComponent } from './component';
import { AppDataTablePaginationComponentPropsInterface } from './component-props.interface';
import { AppDataTablePaginationPageComponent } from './page/component';

describe('AppDataTablePaginationComponent', () => {
  let props: AppDataTablePaginationComponentPropsInterface;
  let wrapper: ShallowWrapper<typeof props>;

  beforeEach(() => {
    props = {
      activePage: 1,
      onChange: jest.fn(),
      totalPages: 5,
    };

    wrapper = shallow(<AppDataTablePaginationComponent {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render nothing if totalPages is less or equal 1', () => {
    wrapper.setProps({
      totalPages: 1,
    });

    expect(wrapper.type()).toBe(null);
  });

  it('should render correct number of the AppDataTablePaginationPageComponent', () => {
    const pageComponents = wrapper.find(AppDataTablePaginationPageComponent);

    expect(pageComponents).toHaveLength(5);
    expect(pageComponents.exists({ page: 1 })).toBe(true);
    expect(pageComponents.exists({ page: 5 })).toBe(true);
  });

  it('should set the isActive property only to the active page', () => {
    const pageComponents = wrapper.find(AppDataTablePaginationPageComponent);

    expect(pageComponents.exists({ page: 1, isActive: true })).toBe(true);
    expect(pageComponents.exists({ page: 2, isActive: false })).toBe(true);
  });
});
