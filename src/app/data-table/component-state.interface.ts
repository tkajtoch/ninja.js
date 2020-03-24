import { AppDataTableComponentPropsInterface } from './component-props.interface';

export interface AppDataTableComponentStateInterface {
  rows: AppDataTableComponentPropsInterface['rows'];
  currentPageNumber: number;
  totalNumberOfPages: number;
}
