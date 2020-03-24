export interface AppDataTablePaginationComponentPropsInterface {
  currentPageNumber: number;
  totalNumberOfPages: number;
  onChange: (pageNumber: number) => void;
}
