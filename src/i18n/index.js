import 'moment/min/locales';
import moment from 'moment';
import { LocaleConfig } from 'react-native-calendars';
import { get } from 'lodash';

import { languages } from '../constants';

let Intl = {};
let activeLocale = languages.SUPPORTED_LOCALES[0];

const setIntlInstance = (intlInstance) => {
  Intl = intlInstance;
};

const setLocale = (locale) => {
  activeLocale = languages.SUPPORTED_LOCALES.includes(locale) ? locale : languages.SUPPORTED_LOCALES[0];
  moment.locale(activeLocale);
  LocaleConfig.locales[activeLocale] = languages[activeLocale].calendarLocale;
  LocaleConfig.defaultLocale = activeLocale;
};

// Date
const _d = value => moment(value).format('L');
// Time
const _h = value => moment(value).format('LT');
// Date and time
const _dh = value => moment(value).format('L LT');
// Month
const _m = value => moment(value).format('MMMM');
// Number
const _n = (value, options = 2) => {
  let format = {
    style: 'decimal',
  };

  if (typeof options === 'number') {
    format.minimumFractionDigits = options;
    format.maximumFractionDigits = options;
  }

  if (typeof options === 'string') {
    format.style = 'currency';
    format.currency = options;
    format.minimumFractionDigits = 2;
    format.maximumFractionDigits = 2;
  }

  if (typeof options === 'object') {
    format = {
      ...format,
      ...options,
    };
  }

  return Intl.NumberFormat(activeLocale, format).format(value || 0);
};
// Text
const _t = value => get(languages[activeLocale], value) || value;

export {
  setIntlInstance,
  setLocale,
  _d,
  _h,
  _dh,
  _m,
  _n,
  _t,
};
