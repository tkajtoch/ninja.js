import React, { ChangeEvent, FunctionComponent } from 'react';
import { AppDataTableSearchComponentPropsInterface } from './component-props.interface';

// TODO: Add i18n placeholder
// TODO: Modify the onChange callback to have string value instead of react ChangeEvent
export const AppDataTableSearchComponent: FunctionComponent<AppDataTableSearchComponentPropsInterface> = ({
  onSearch,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => onSearch({ value: event.target.value });

  return <input type='search' className='form-control' placeholder='Søg brugere' onChange={onChange} />;
};
