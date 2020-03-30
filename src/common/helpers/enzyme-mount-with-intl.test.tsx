import React, { FunctionComponent } from 'react';
import { enzymeMountWithIntl } from './enzyme-mount-with-intl';
import { ReactWrapper } from 'enzyme';
import { IntlProvider } from 'react-intl';

describe('enzymeMountWithIntl', () => {
  it('should return an instance of ReactWrapper', () => {
    expect(enzymeMountWithIntl(<span />)).toBeInstanceOf(ReactWrapper);
  });

  it('should wrap provided component with IntlProvider', () => {
    const Component: FunctionComponent = () => <span />;
    const wrapper = enzymeMountWithIntl(<Component />);

    expect(wrapper.getElement().type).toEqual(IntlProvider);
    expect(wrapper.exists(Component)).toBe(true);
  });
});
