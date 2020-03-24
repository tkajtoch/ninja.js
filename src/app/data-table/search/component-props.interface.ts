import { AppDataTableSearchEventInterface } from './search-event.interface';

export interface AppDataTableSearchComponentPropsInterface {
  onSearch: (event: AppDataTableSearchEventInterface) => void;
}
