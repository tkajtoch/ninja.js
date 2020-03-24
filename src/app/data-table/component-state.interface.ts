import { DataTableTypesItemType } from './types';

export interface AppDataTableComponentStateInterface {
  rows: Array<DataTableTypesItemType>;
  currentPageNumber: number;
  totalNumberOfPages: number;
}
