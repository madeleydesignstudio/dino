import { liteClient as algoliasearch } from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";

import { Hit } from "./Hit";

const searchClient = algoliasearch(
  "9Z3PJV6S0X",
  "a9bd069c2af9f5aab10c37221c7849c7"
);

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies_index">
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};
