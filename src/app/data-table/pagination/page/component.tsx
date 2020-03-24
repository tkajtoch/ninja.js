import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { AppDataTablePaginationPageComponentPropsInterface } from './component-props.interface';
import styles from './style.module.css';

export const AppDataTablePaginationPageComponent: FunctionComponent<AppDataTablePaginationPageComponentPropsInterface> = ({
  page,
  isActive,
  onChange,
}) => (
  <li className={styles.appdatatablepaginationpage}>
    <button className={classNames({ 'button-outline': isActive })} onClick={(): void => onChange({ page })}>
      {page}
    </button>
  </li>
);
