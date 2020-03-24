import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './app/component';

export function index(): void {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    // Technically we shouldn't ever be here but let's print out an error to the console
    // It might be helpful for developers while while making modifications to the index.html.
    console.error('Root element not found');
    return;
  }

  const userDataElement: HTMLElement | null = document.getElementById('user-data');

  if (!userDataElement || !userDataElement.dataset.users) {
    console.error('Incorrect user data element');
    return;
  }

  // Let's assume the data has correct format for now
  // I would validate it anyway and add an explicit type to that property
  const userData = JSON.parse(userDataElement.dataset.users);

  ReactDOM.render(<AppComponent rows={userData} />, rootElement);
}

index();
