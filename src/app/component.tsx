import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { IntlProvider } from 'react-intl';
import { I18nTranslations } from '../i18n/messages';
import { DataTableComponent } from './data-table/component';
import { AppComponentPropsInterface } from './component-props.interface';
import styles from './style.module.css';
import { I18nLocaleEnum } from '../i18n/locale.enum';

export const AppComponent: FunctionComponent<AppComponentPropsInterface> = ({ rows }) => {
  // It can be replaced with a locale state in the future
  const locale = I18nLocaleEnum.en;

  return (
    <IntlProvider locale={locale} messages={I18nTranslations[locale]}>
      <div className={classNames(styles.app, 'container')}>
        <DataTableComponent rows={rows} rowsPerPage={5} />
      </div>
    </IntlProvider>
  );
};
