import React, { FunctionComponent } from 'react'
import { AppDataTableSearchComponentPropsInterface } from './component-props.interface';

export const AppDataTableSearchComponent: FunctionComponent<AppDataTableSearchComponentPropsInterface> = ({ onSearch }) => (
  (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch} />
    </div>
  )
);
