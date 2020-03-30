import { PaginatorService } from './service';

describe('PaginatorService', () => {
  const items: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  it('should instantiate correctly', () => {
    const paginator = new PaginatorService(items);

    expect(paginator).toBeInstanceOf(PaginatorService);
  });

  describe('setItems()', () => {
    it('should update items', () => {
      const paginator: PaginatorService<string> = new PaginatorService([], {
        itemsPerPage: 2,
      });
      expect(paginator.getPageItems()).toEqual([]);
      expect(paginator.getNumberOfPages()).toEqual(1);

      paginator.setItems(items);
      expect(paginator.getPageItems()).toEqual(['1', '2']);
    });

    it('should reset the current page number', () => {
      const paginator: PaginatorService<string> = new PaginatorService(items, {
        currentPage: 3,
        itemsPerPage: 2,
      });

      expect(paginator.getCurrentPage()).toEqual(3);
      paginator.setItems([]);
      expect(paginator.getCurrentPage()).toEqual(1);
    });
  });

  describe('getNumberOfPages()', () => {
    it('should return the correct number of pages', () => {
      let paginator: PaginatorService<string> = new PaginatorService([]);
      expect(paginator.getNumberOfPages()).toEqual(1);

      paginator = new PaginatorService(items, {
        itemsPerPage: 2,
      });

      expect(paginator.getNumberOfPages()).toEqual(5);
    });
  });

  describe('getPage()', () => {
    it('should return all items of the currently selected page', () => {
      const paginator = new PaginatorService(items, {
        itemsPerPage: 2,
      });

      expect(paginator.getPageItems()).toEqual(['1', '2']);

      paginator.setCurrentPage(2);

      expect(paginator.getPageItems()).toEqual(['3', '4']);
    });

    it('should set the page to 1 if provided value is lower than 1', () => {
      const paginator = new PaginatorService(items);

      paginator.setCurrentPage(0);
      expect(paginator.getCurrentPage()).toEqual(1);

      paginator.setCurrentPage(-1);
      expect(paginator.getCurrentPage()).toEqual(1);
    });

    it('should disallow setting page number greater than total number of pages', () => {
      const paginator = new PaginatorService(items, {
        itemsPerPage: 2,
      });

      paginator.setCurrentPage(99);
      expect(paginator.getCurrentPage()).toEqual(5);
    });
  });
});
