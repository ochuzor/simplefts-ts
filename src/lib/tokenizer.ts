import { lowercaseFilter, stemmerFilter, stopwordFilter } from './filter';

export function tokenize(text: string): string[] {
  return text.split(/\W+/);
}

// analyze analyzes the text and returns a slice of tokens.
export function analyze(text: string): string[] {
  let tokens = tokenize(text);
  tokens = lowercaseFilter(tokens);
  tokens = stopwordFilter(tokens);
  tokens = stemmerFilter(tokens);

  return tokens;
}
