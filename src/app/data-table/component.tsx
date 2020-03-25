import React, { Component, ReactNode } from 'react';
import { AppDataTablePaginationComponent } from './pagination/component';
import { AppDataTableRowComponent } from './row/component';
import { AppDataTableSearchComponent } from './search/component';
import { AppDataTableComponentPropsInterface } from './component-props.interface';
import { AppDataTableComponentStateInterface } from './component-state.interface';
import { DataTableTypesItemType } from './types';
import { AppDataTablePaginationChangeEventInterface } from './pagination/change-event.interface';
import { AppDataTableSearchEventInterface } from './search/search-event.interface';

export class DataTableComponent extends Component<
  AppDataTableComponentPropsInterface,
  AppDataTableComponentStateInterface
> {
  state = {
    rows: this.props.rows,
    currentPageNumber: 1,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows),
  };

  static defaultProps: Partial<AppDataTableComponentPropsInterface> = {
    rowsPerPage: 40,
  };

  calculateTotalNumberOfPages(rows: Array<DataTableTypesItemType>): number {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) {
      return 0;
    }

    return Math.ceil(rows.length / rowsPerPage);
  }

  search = (event: AppDataTableSearchEventInterface): void => {
    const { value } = event;
    const { rows } = this.props;
    let rowsFound = rows;

    if (value) {
      rowsFound = rows.filter(
        (row) =>
          row.name1.toLowerCase().search(value) > -1 || (row.email && row.email.toLowerCase().search(value) > -1),
      );
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 1,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound),
    });
  };

  // TODO: Change function name to be a proper event handler
  changeToPageNumber = (event: AppDataTablePaginationChangeEventInterface): void => {
    this.setState({
      currentPageNumber: event.page,
    });
  };

  rowsInPageNumber(pageNumber: number): Array<number> {
    const { rowsPerPage } = this.props;

    const startIndex = (pageNumber - 1) * rowsPerPage;
    // TODO: it shouldn't be returned like this
    return [startIndex, startIndex + rowsPerPage];
  }

  render(): ReactNode {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;

    const rowsToRender = rows
      .map((row) => <AppDataTableRowComponent key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber));

    return (
      <div>
        <AppDataTableSearchComponent onSearch={this.search} />
        <table>
          <tbody>{rowsToRender}</tbody>
        </table>
        <AppDataTablePaginationComponent
          activePage={currentPageNumber}
          totalPages={totalNumberOfPages}
          onChange={this.changeToPageNumber}
        />
      </div>
    );
  }
}
