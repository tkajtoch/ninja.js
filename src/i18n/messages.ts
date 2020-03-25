import { keysToValues } from '../common/helpers/keys-to-values';
import daData from './data/da.json';
import enData from './data/en.json';
import plData from './data/pl.json';
import { I18nLocaleEnum } from './locale.enum';

export const I18nMessages = {
  ...keysToValues(daData),
  ...keysToValues(enData),
  ...keysToValues(plData),
};

export const I18nTranslations: Record<I18nLocaleEnum, Record<keyof typeof I18nMessages, string>> = {
  [I18nLocaleEnum.da]: daData,
  [I18nLocaleEnum.en]: enData,
  [I18nLocaleEnum.pl]: plData,
};
