import { AppDataTableTypesItemType } from './types';

export function appDataTableFilterRows(
  rows: Array<AppDataTableTypesItemType>,
  searchValue: string,
): Array<AppDataTableTypesItemType> {
  if (!searchValue) {
    return rows;
  }

  searchValue = searchValue.toLowerCase();

  return rows.filter(
    (row) =>
      row.name1.toLowerCase().search(searchValue) > -1 ||
      (row.email && row.email.toLowerCase().search(searchValue) > -1),
  );
}
