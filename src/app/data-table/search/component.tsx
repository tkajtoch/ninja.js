import React, { ChangeEvent, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { I18nMessages } from '../../../i18n/messages';
import { AppDataTableSearchComponentPropsInterface } from './component-props.interface';

export const AppDataTableSearchComponent: FunctionComponent<AppDataTableSearchComponentPropsInterface> = ({
  onChange,
  value,
}) => {
  const intl = useIntl();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => onChange({ value: event.target.value });

  return (
    <input
      type='search'
      className='form-control'
      placeholder={intl.formatMessage({ id: I18nMessages['user_search.search_input.placeholder'] })}
      onChange={handleChange}
      value={value}
    />
  );
};
