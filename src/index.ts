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

  const query = 'the donut';

  console.log('Starting simplefts');

  let start = performance.now();
  const docs = loadDocuments('../sample/wiki.json');
  let end = performance.now();
  console.log(`Loaded ${docs.length} documents in ${end - start} ms`);

  start = performance.now();
  const idx: Index = search.add({}, docs);
  end = performance.now();
  console.log(`Indexed ${docs.length} documents in ${end - start} ms`);

  start = performance.now();
  const matchedIDs = search.search(idx, query);
  end = performance.now();
  console.log(`Search found ${matchedIDs.length} documents in ${end - start} ms`);

  matchedIDs.forEach((id) => {
    const doc = docs.find(({ Id }) => id === Id);
    console.log(`${id}, ${doc?.Text}`);
  });
}

main();
