import { ID, Index, Document } from './document';
import { analyze } from './tokenizer';
import { reduce } from './utils';

export function add(idx: Index, docs: Document[]): Index {
  return reduce(docs)((idx, doc) => {
    const tokens = analyze(doc.Text);
    tokens.forEach((token) => {
      const ids = idx[token] || [];
      if (!ids.includes(doc.Id)) {
        idx[token] = ids.concat(doc.Id);
      }
    });

    return idx;
  }, idx);
}

export function intersection(a: ID[], b: ID[]): ID[] {
  return a.concat(b);
}

export function search(index: Index, text: string): ID[] {
  const tokens = analyze(text);

  return reduce(tokens)((acc, token) => {
    const ids = index[token] || [];
    return intersection(acc, ids);
  }, [] as ID[]);
}
