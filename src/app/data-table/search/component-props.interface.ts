import { AppDataTableSearchEventInterface } from './search-event.interface';

export interface AppDataTableSearchComponentPropsInterface {
  value: string;
  onChange: (event: AppDataTableSearchEventInterface) => void;
}
