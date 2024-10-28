import { searchClient } from "@algolia/client-search";

const client = searchClient("9Z3PJV6S0X", "d07f55dc46b925ea9f008bffa6d5b0c2");

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch(
    "https://dashboard.algolia.com/sample_datasets/movie.json"
  );
  const movies = await datasetRequest.json();
  return await client.saveObjects({
    indexName: "movies_index",
    objects: movies,
  });
};

processRecords()
  .then(() => console.log("Successfully indexed objects!"))
  .catch((err) => console.error(err));
