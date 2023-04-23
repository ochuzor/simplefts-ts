import { map } from './utils';

export type FilterFn = (tokens: string[]) => string[];

export const lowercaseFilter: FilterFn = (tokens) => {
  return map(tokens)((token) => token.toLowerCase());
};

const STOP_WORDS = ['a', 'and', 'be', 'have', 'i', 'in', 'of', 'that', 'the', 'to'];

export const stopwordFilter: FilterFn = (tokens) => {
  return tokens.filter((token) => !STOP_WORDS.includes(token));
};

export const stemmerFilter: FilterFn = (tokens) => {
  console.debug('not yet implmented<stemmerFilter>');
  return tokens;
};
