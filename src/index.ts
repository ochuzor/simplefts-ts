import { loadDocuments } from './lib';
import { Index } from './lib/document';
import * as search from './lib/search';

async function main() {
  /*
    * todo
    var dumpPath, query string
    flag.StringVar(&dumpPath, "p", "enwiki-latest-abstract1.xml.gz", "wiki abstract dump path")
    flag.StringVar(&query, "q", "Small wild cat", "search query")
    flag.Parse()
  */

  console.log('Starting simplefts');

  const docs = loadDocuments('../sample/wiki.json');
  console.log(`Loaded ${docs.length} documents in ${0}s`);

  const idx: Index = search.add({}, docs);
  console.log(`Indexed ${docs.length} documents in ${0}s`);

  const query = 'Small wild cat';
  const matchedIDs = search.search(idx, query);
  console.log(`Search found ${matchedIDs.length} documents in ${2}s`);

  matchedIDs.forEach((id) => {
    const doc = docs.find(({ Id }) => id === Id);
    console.log(`${id}, ${doc?.Text}`);
  });
}

main();
