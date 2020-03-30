import { useEffect, useMemo, useState } from 'react';
import { PaginatorService } from '../helpers/paginator/service';
import { PaginatorOptionsInterface } from '../helpers/paginator/options.interface';
import { UsePaginatorInterface } from './use-paginator.interface';

export function usePaginator<TItem>(
  initialItems: Array<TItem>,
  options: Partial<PaginatorOptionsInterface> = {},
): UsePaginatorInterface<TItem> {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [items, setItems] = useState<Array<TItem>>(initialItems);
  const [pageItems, setPageItems] = useState<Array<TItem>>([]);

  const paginator: PaginatorService<TItem> = useMemo(() => new PaginatorService([], options), [options]);

  useEffect(() => {
    paginator.setItems(items);
    setCurrentPage(paginator.getCurrentPage());
    setPageItems(paginator.getPageItems());
    setTotalPages(paginator.getNumberOfPages());
  }, [paginator, items]);

  useEffect(() => {
    paginator.setCurrentPage(currentPage);
    setPageItems(paginator.getPageItems());
  }, [paginator, setPageItems, currentPage]);

  return {
    currentPage,
    totalPages,
    setCurrentPage,
    setItems,
    pageItems,
  };
}
