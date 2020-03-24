import React, { FunctionComponent } from 'react';
import { AppDataTableRowComponentPropsInterface } from './component-props.interface';

export const AppDataTableRowComponent: FunctionComponent<AppDataTableRowComponentPropsInterface> = ({ row }) => (
  <tr>
    <td>
      <a href={row.edit_path}>{row.name1}</a>
      <br />
      <small>{row.email}</small>
    </td>
  </tr>
);
