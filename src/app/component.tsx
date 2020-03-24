import React, { Component, ReactNode } from 'react';
import { DataTableComponent } from './data-table/component';
import { AppComponentPropsInterface } from './component-props.interface';
import './style.css';

export class AppComponent extends Component<AppComponentPropsInterface> {
  render(): ReactNode {
    return (
      <div className="container mt-3">
        <DataTableComponent rows={this.props.rows} locale="da" rowsPerPage={5} />
      </div>
    );
  }
}
