import React, { MouseEvent, FunctionComponent } from 'react';
import { AppDataTablePaginationPageComponentPropsInterface } from './component-props.interface';

export const AppDataTablePaginationPageComponent: FunctionComponent<
  AppDataTablePaginationPageComponentPropsInterface
> = ({
  currentPageNumber,
  pageNumber,
  onChange,
}) => {
  const isActivePage = (): boolean => {
    return currentPageNumber == pageNumber
  };

  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  const click = (event: MouseEvent) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  if (isActivePage()) {
    return(
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={click} >{renderedPageNumber()}</button>
      </li>
    )
  }

  return (
    <li className="page-item mr-1">
      <button className="page-link" onClick={click} >{renderedPageNumber()}</button>
    </li>
  );
};
