export type FilterFn = (tokens: string[]) => string[];

export const lowercaseFilter: FilterFn = (tokens) => {
  return tokens.map((token) => token.toLowerCase());
};

export const stopwordFilter: FilterFn = (tokens) => {
  return tokens;
};

export const stemmerFilter: FilterFn = (tokens) => {
  return tokens;
};
