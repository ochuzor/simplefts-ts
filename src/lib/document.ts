export type ID = number;
export type Document = {
  Id: ID;
  Title: string;
  Url: string;
  Text: string;
};

export type Index = Record<string, number[]>;

const docs: Omit<Document, 'Id'>[] = [
  { Title: '', Text: 'a donut on a glass plate', Url: '' },
  { Title: '', Text: 'only the donut', Url: '' },
  { Title: '', Text: 'listen to the drum machine', Url: '' },
  { Title: '', Text: 'This is just a test. A test text string, ya know.', Url: '' },
];

export function loadDocuments(file: string): Document[] {
  console.log('file =>', file);

  return docs.map((doc, index) => ({ ...doc, Id: index + 1 }));
}
