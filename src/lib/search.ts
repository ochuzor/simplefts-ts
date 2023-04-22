import { ID, Index, Document } from './document';

export function add(idx: Index, docs: Document[]): Index {
  // docs.map((doc) => {});
  console.log('docs =>', docs);

  return idx;
}

export function intersection(a: ID[], b: ID[]): ID[] {
  console.log('intersection =>', a, b);

  return [];
}

export function search(index: Index, text: string): ID[] {
  console.log(index, text);
  return [];
}
