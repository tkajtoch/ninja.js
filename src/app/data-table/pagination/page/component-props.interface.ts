export interface AppDataTablePaginationPageComponentPropsInterface {
  pageNumber: number;
  currentPageNumber: number;
  onChange: (pageNumber: number) => void;
}
