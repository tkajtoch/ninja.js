import { DataTableTypesItemType } from './types';

export interface AppDataTableComponentPropsInterface {
  rows: Array<DataTableTypesItemType>;
  rowsPerPage: number;
}
