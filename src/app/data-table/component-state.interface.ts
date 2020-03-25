import { DataTableTypesItemType } from './types';

export interface AppDataTableComponentStateInterface {
  filteredRows: Array<DataTableTypesItemType>;
  activePage: number;
  totalPages: number;
}
