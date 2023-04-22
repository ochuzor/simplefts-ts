export type ID = number;
export type Document = {
  Id: ID;
  Title: string;
  Url: string;
  Text: string;
};

export type Index = Record<string, number[]>;

const docs: Document[] = [
  { Id: 1, Title: '', Text: '', Url: '' },
  { Id: 2, Title: '', Text: '', Url: '' },
  { Id: 3, Title: '', Text: '', Url: '' },
];

export function loadDocuments(file: string): Document[] {
  console.log('file =>', file);

  return docs.slice();
}
