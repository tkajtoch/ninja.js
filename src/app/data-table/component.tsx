import React, { Component, ReactNode } from 'react';
import { AppDataTablePaginationComponent } from './pagination/component';
import { AppDataTableRowComponent } from './row/component';
import { AppDataTableSearchComponent } from './search/component';
import { AppDataTableComponentPropsInterface } from './component-props.interface';
import { AppDataTableComponentStateInterface } from './component-state.interface';
import { DataTableTypesItemType } from './types';
import { AppDataTablePaginationChangeEventInterface } from './pagination/change-event.interface';
import { AppDataTableSearchEventInterface } from './search/search-event.interface';

// This could be a Function Component but I'm leaving it as a Class Component because it was like that the beginning
export class DataTableComponent extends Component<
  AppDataTableComponentPropsInterface,
  AppDataTableComponentStateInterface
> {
  static defaultProps: Partial<AppDataTableComponentPropsInterface> = {
    rowsPerPage: 40,
  };

  // Let's assume the props won't change over time so there's no need
  // to do any kind of resetting the state when it happens
  state = {
    filteredRows: this.props.rows,
    activePage: 1,
    totalPages: this.calculateTotalPages(this.props.rows),
  };

  render(): ReactNode {
    const { activePage, totalPages } = this.state;

    const rows = this.getRowsForActivePage();

    return (
      <div>
        <AppDataTableSearchComponent onSearch={this.onSearchTable} />
        <table>
          <tbody>
            {rows.map((row, index) => (
              <AppDataTableRowComponent key={`${row.per_id}-${index}`} row={row} />
            ))}
          </tbody>
        </table>
        <AppDataTablePaginationComponent
          activePage={activePage}
          totalPages={totalPages}
          onChange={this.onChangePagination}
        />
      </div>
    );
  }

  private onSearchTable = (event: AppDataTableSearchEventInterface): void => {
    const filteredRows = this.filterRows(this.props.rows, event.value);

    this.setState({
      filteredRows,
      activePage: 1,
      totalPages: this.calculateTotalPages(filteredRows),
    });
  };

  private onChangePagination = (event: AppDataTablePaginationChangeEventInterface): void => {
    this.setState({
      activePage: event.page,
    });
  };

  private getRowsForActivePage(): Array<DataTableTypesItemType> {
    const { rowsPerPage } = this.props;
    const { activePage, filteredRows } = this.state;

    // activePage is 1-based
    const startIndex: number = (activePage - 1) * rowsPerPage;
    const endIndex: number = startIndex + rowsPerPage;
    return filteredRows.slice(startIndex, endIndex);
  }

  private filterRows(rows: Array<DataTableTypesItemType>, searchValue: string): Array<DataTableTypesItemType> {
    if (!searchValue) {
      return rows;
    }

    searchValue = searchValue.toLowerCase();

    return rows.filter(
      (row) =>
        row.name1.toLowerCase().search(searchValue) > -1 ||
        (row.email && row.email.toLowerCase().search(searchValue) > -1),
    );
  }

  private calculateTotalPages(rows: Array<DataTableTypesItemType>): number {
    const { rowsPerPage } = this.props;

    if (rowsPerPage < 1) {
      return 0;
    }

    return Math.ceil(rows.length / rowsPerPage);
  }
}
