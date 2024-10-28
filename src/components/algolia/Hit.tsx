import { Highlight } from "react-instantsearch";
import type { Hit as AlgoliaHit } from "instantsearch.js";

interface MovieHit {
  backdrop_path: string;
  original_title: string;
  release_date: string;
}

export const Hit = ({ hit }: { hit: AlgoliaHit<MovieHit> }) => {
  return (
    <article>
      <img src={hit.backdrop_path} />
      <div className="hit-original_title">
        <Highlight attribute="original_title" hit={hit} />
      </div>
      <div className="hit-release_date">
        <Highlight attribute="release_date" hit={hit} />
      </div>
    </article>
  );
};
