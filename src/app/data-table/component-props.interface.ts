import { AppDataTableTypesItemType } from './types';

export interface AppDataTableComponentPropsInterface {
  rows: Array<AppDataTableTypesItemType>;
  rowsPerPage: number;
}
