import locales from '../../locales.json';

export const required = (value) => {
  if (!value) {
    return locales['please.answer.the.question'];
  }
  return undefined;
};
