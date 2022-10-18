export const AdType = {
  DEFAULT: 'default',
  ARTICLE: 'article',
  VERTICAL: 'verticle'
}

export const adUnitProps = {
  [AdType.DEFAULT]: {
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
  [AdType.ARTICLE]: {
    'data-ad-format': 'fluid',
    'data-ad-layout': 'in-article',
  },
  [AdType.VERTICAL]: {
    'data-ad-format': 'auto',
    'data-full-width-responsive': 'true',
  },
};
