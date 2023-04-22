import { loadDocuments } from './lib';

async function main() {
  const docs = loadDocuments('../sample/wiki.json');
  console.log(docs);
}

main();
