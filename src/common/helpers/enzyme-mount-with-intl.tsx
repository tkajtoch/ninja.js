import { mount, ReactWrapper } from 'enzyme';
import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { I18nTranslations } from '../../i18n/messages';
import { I18nLocaleEnum } from '../../i18n/locale.enum';

export function enzymeMountWithIntl(node: ReactNode): ReactWrapper {
  return mount(
    <IntlProvider locale={I18nLocaleEnum.en} messages={I18nTranslations[I18nLocaleEnum.en]}>
      {node}
    </IntlProvider>,
  );
}
