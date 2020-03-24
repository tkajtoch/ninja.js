import { DataTableTypesItemType } from './types';

export interface AppDataTableComponentPropsInterface {
  rows: Array<DataTableTypesItemType>;
  // Currently unused (?)
  locale: string;
  rowsPerPage: number;
}
