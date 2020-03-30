export interface UsePaginatorInterface<TItem> {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void;
  setItems: (items: Array<TItem>) => void;
  pageItems: Array<TItem>;
}
