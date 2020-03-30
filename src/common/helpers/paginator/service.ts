import { PaginatorOptionsInterface } from './options.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class PaginatorService<TItem = any> {
  private static readonly defaultOptions: Required<PaginatorOptionsInterface> = {
    itemsPerPage: 10,
    currentPage: 1,
  };

  private items: Array<TItem>;
  private currentPage: number = 1;
  private readonly options: Required<PaginatorOptionsInterface>;

  constructor(items: Array<TItem>, options: Partial<PaginatorOptionsInterface> = {}) {
    this.items = items;
    this.options = Object.assign({}, PaginatorService.defaultOptions, options);

    this.setCurrentPage(this.options.currentPage);
  }

  public setItems(items: Array<TItem>): void {
    this.currentPage = 1;
    this.items = items;
  }

  public getNumberOfPages(): number {
    const { itemsPerPage } = this.options;

    if (this.items.length <= itemsPerPage) {
      return 1;
    }

    return Math.ceil(this.items.length / itemsPerPage);
  }

  public getPageItems(page: number = this.currentPage): Array<TItem> {
    const { itemsPerPage } = this.options;

    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;

    return this.items.slice(startIndex, endIndex);
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public setCurrentPage(currentPage: number): void {
    if (currentPage < 1) {
      currentPage = 1;
    }

    const totalNumberOfPages = this.getNumberOfPages();
    if (currentPage > totalNumberOfPages) {
      currentPage = totalNumberOfPages;
    }

    this.currentPage = currentPage;
  }
}
