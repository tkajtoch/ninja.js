import classNames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { DataTableComponent } from './data-table/component';
import { AppComponentPropsInterface } from './component-props.interface';
import styles from './style.module.css';

export class AppComponent extends Component<AppComponentPropsInterface> {
  render(): ReactNode {
    return (
      <div className={classNames(styles.app, 'container')}>
        <DataTableComponent rows={this.props.rows} locale='da' rowsPerPage={5} />
      </div>
    );
  }
}
