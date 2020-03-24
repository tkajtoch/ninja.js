import React, { FunctionComponent } from 'react';
import { arrayRange } from '../../../common/helpers/array-range';
import { AppDataTablePaginationPageComponent } from './page/component';
import { AppDataTablePaginationComponentPropsInterface } from './component-props.interface';
import styles from './style.module.css';

export const AppDataTablePaginationComponent: FunctionComponent<AppDataTablePaginationComponentPropsInterface> = ({
  activePage,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = arrayRange(totalPages);

  return (
    <ul className={styles.appdatatablepagination}>
      {pages.map((page) => (
        <AppDataTablePaginationPageComponent
          key={page}
          isActive={activePage === page + 1}
          page={page + 1}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};
