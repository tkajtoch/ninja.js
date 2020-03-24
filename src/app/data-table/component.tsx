import React, { Component } from 'react'
import { AppDataTablePaginationComponent } from './pagination/component';
import { AppDataTableRowComponent } from './row/component';
import { AppDataTableSearchComponent } from './search/component';
import { AppDataTableComponentPropsInterface } from './component-props.interface';
import { AppDataTableComponentStateInterface } from './component-state.interface';

export class DataTableComponent extends Component<
  AppDataTableComponentPropsInterface,
  AppDataTableComponentStateInterface
> {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
  };

  static defaultProps: Partial<AppDataTableComponentPropsInterface> = {
    rowsPerPage: 40,
  };

  calculateTotalNumberOfPages(rows: AppDataTableComponentPropsInterface['rows']): number {
    const { rowsPerPage } = this.props;
    if (rowsPerPage == 0) {
      return 0;
    }

    return Math.ceil(rows.length / rowsPerPage);
  }

  // TODO: Fix the any
  search(event: any) {
    const { rows } = this.props;
    const text = event.target.value;
    let rowsFound = rows;

    if (text) {
      // TODO: Refactor
      rowsFound = rows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
         (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      });
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    })
  }

  // TODO: Change function name to be a proper event handler
  changeToPageNumber = (pageNumber: number): void => {
    this.setState({
      currentPageNumber: pageNumber,
    });
  };

  rowsInPageNumber(pageNumber: number): Array<number> {
    const { rowsPerPage } = this.props;

    const startIndex = pageNumber * rowsPerPage;
    // TODO: it shouldn't be returned like this
    return [startIndex, startIndex + rowsPerPage];
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;
    const rowsToRender = rows
      .map(row => <AppDataTableRowComponent key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber))

    return(
      <div>
        <AppDataTableSearchComponent onSearch={this.search.bind(this)} />
        <table>
          <tbody>
            { rowsToRender }
          </tbody>
        </table>
        <AppDataTablePaginationComponent
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber}
        />
      </div>
    )
  }
}
