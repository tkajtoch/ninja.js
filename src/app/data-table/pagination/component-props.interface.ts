import { AppDataTablePaginationChangeEventInterface } from './change-event.interface';

export interface AppDataTablePaginationComponentPropsInterface {
  activePage: number;
  totalPages: number;
  onChange: (event: AppDataTablePaginationChangeEventInterface) => void;
}
