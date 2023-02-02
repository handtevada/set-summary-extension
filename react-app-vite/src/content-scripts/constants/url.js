export const SET_PROFILE = (symbol) => {
  return `https://www.set.or.th/api/set/company/${symbol}/profile?lang=th`;
};

export const SET_FINANCE = (symbol) => {
  return `https://www.set.or.th/api/set/stock/${symbol}/company-highlight/financial-data?lang=th`;
};

export const SET_FINANCE_STATIC = (symbol) => {
  return `https://www.set.or.th/api/set/stock/${symbol}/company-highlight/trading-stat?lang=th`;
};

export const SET_SHARE_HOLDER = (symbol) => {
  return `https://www.set.or.th/api/set/stock/${symbol}/shareholder?lang=th`;
};

export const SET_BENEFIT = (symbol) => {
  return `https://www.set.or.th/api/set/stock/${symbol}/corporate-action?lang=th`;
};

export const SET_NEWS = (symbol, fromDate, toDate) => {
  return `https://www.set.or.th/api/set/news/search?symbol=${symbol}&fromDate=${fromDate}&toDate=${toDate}&keyword=&lang=th`;
};
