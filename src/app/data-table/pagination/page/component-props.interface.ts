import { AppDataTablePaginationChangeEventInterface } from '../change-event.interface';

export interface AppDataTablePaginationPageComponentPropsInterface {
  page: number;
  isActive: boolean;
  onChange: (event: AppDataTablePaginationChangeEventInterface) => void;
}
