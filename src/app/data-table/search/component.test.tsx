import { ReactWrapper } from 'enzyme';
import React from 'react';
import { enzymeMountWithIntl } from '../../../common/helpers/enzyme-mount-with-intl';
import { AppDataTableSearchComponent } from './component';
import { AppDataTableSearchComponentPropsInterface } from './component-props.interface';

describe('AppDataTableSearchComponent', () => {
  let props: AppDataTableSearchComponentPropsInterface;
  let wrapper: ReactWrapper;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      value: 'mock',
    };

    wrapper = enzymeMountWithIntl(<AppDataTableSearchComponent {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the input', () => {
    expect(wrapper.exists('input')).toBe(true);
  });

  it('should call onChange when input value changes', () => {
    expect(props.onChange).not.toHaveBeenCalled();

    wrapper.find('input').simulate('change', { target: { value: 'abc' } });

    expect(props.onChange).toHaveBeenCalledWith({
      value: 'abc',
    });
  });
});
