import React, { FunctionComponent } from 'react';
import { arrayRange } from '../../../common/helpers/array-range';
import { AppDataTablePaginationPageComponent } from './page/component';
import { AppDataTablePaginationComponentPropsInterface } from './component-props.interface';

export const AppDataTablePaginationComponent: FunctionComponent<AppDataTablePaginationComponentPropsInterface> = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  if (totalNumberOfPages <= 1) {
    return null;
  }

  const pages = arrayRange(totalNumberOfPages);

  return (
    <ul className="pagination">
      {pages.map((pageNumber) => (
        <AppDataTablePaginationPageComponent
          key={pageNumber}
          pageNumber={pageNumber}
          currentPageNumber={currentPageNumber}
          onChange={onChange}
        />
      ))}
    </ul>
  );
};
