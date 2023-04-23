import { ID, Index, Document } from './document';
import { analyze } from './tokenizer';

export function add(idx: Index, docs: Document[]): Index {
  docs.map((doc) => {
    const tokens = analyze(doc.Text);
    tokens.forEach((token) => {
      const ids = idx[token] || [];
      if (!ids.includes(doc.Id)) {
        idx[token] = ids.concat(doc.Id);
      }
    });
  });

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
