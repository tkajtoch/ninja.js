import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { appUserModelMock } from '../../user/model.mock';
import { AppDataTableRowComponent } from './component';
import { AppDataTableRowComponentPropsInterface } from './component-props.interface';

describe('AppDataTableRowComponent', () => {
  let props: AppDataTableRowComponentPropsInterface;
  let wrapper: ShallowWrapper<typeof props>;

  beforeEach(() => {
    props = {
      row: appUserModelMock(),
    };

    wrapper = shallow(<AppDataTableRowComponent {...props} />);
  });

  it('should render correcty', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render anchor element pointing to "edit_path" and containing "name1"', () => {
    const anchorWrapper = wrapper.find('a');

    expect(anchorWrapper.props().href).toBe(props.row.edit_path);
    expect(anchorWrapper.props().children).toBe(props.row.name1);
  });

  it('should render user email', () => {
    const smallWrapper = wrapper.find('small');

    expect(smallWrapper.props().children).toBe(props.row.email);
  });
});
