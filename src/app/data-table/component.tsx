import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { PaginatorOptionsInterface } from '../../common/helpers/paginator/options.interface';
import { usePaginator } from '../../common/hooks/use-paginator';
import { AppDataTablePaginationComponent } from './pagination/component';
import { AppDataTableRowComponent } from './row/component';
import { AppDataTableSearchComponent } from './search/component';
import { AppDataTablePaginationChangeEventInterface } from './pagination/change-event.interface';
import { AppDataTableSearchEventInterface } from './search/search-event.interface';
import { AppDataTableComponentPropsInterface } from './component-props.interface';
import { appDataTableFilterRows } from './filter-rows';
import { AppDataTableTypesItemType } from './types';

export const DataTableComponent: FunctionComponent<AppDataTableComponentPropsInterface> = ({
  rows,
  rowsPerPage = 40,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const paginatorOptions: PaginatorOptionsInterface = useMemo(() => ({ itemsPerPage: rowsPerPage }), [rowsPerPage]);
  const filteredItems = useMemo(() => appDataTableFilterRows(rows, searchValue), [rows, searchValue]);

  const paginator = usePaginator<AppDataTableTypesItemType>(rows, paginatorOptions);

  useEffect(() => {
    paginator.setItems(filteredItems);
  }, [paginator, filteredItems]);

  const onSearch = (event: AppDataTableSearchEventInterface): void => setSearchValue(event.value);

  const onChangePagination = (event: AppDataTablePaginationChangeEventInterface): void =>
    paginator.setCurrentPage(event.page);

  return (
    <div>
      <AppDataTableSearchComponent value={searchValue} onChange={onSearch} />
      <table>
        <tbody>
          {paginator.pageItems.map((item, index) => (
            <AppDataTableRowComponent key={`${item.per_id}-${index}`} row={item} />
          ))}
        </tbody>
      </table>
      <AppDataTablePaginationComponent
        activePage={paginator.currentPage}
        totalPages={paginator.totalPages}
        onChange={onChangePagination}
      />
    </div>
  );
};
