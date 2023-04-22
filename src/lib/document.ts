/*
type document struct {
	Title string `xml:"title"`
	URL   string `xml:"url"`
	Text  string `xml:"abstract"`
	ID    int
}
*/

export type Document = {
  Id: string;
  Title: string;
  Url: string;
  Text: string;
};

const docs: Document[] = [
  { Id: '1', Title: '', Text: '', Url: '' },
  { Id: '2', Title: '', Text: '', Url: '' },
  { Id: '3', Title: '', Text: '', Url: '' },
];

export function loadDocuments(file: string): Document[] {
  console.log('file =>', file);

  return docs.slice();
}
