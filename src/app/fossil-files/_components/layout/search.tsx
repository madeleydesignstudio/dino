"use client";

import { useEffect, useState } from "react";

type SearchResult = {
  id: string;
  url: string;
  title: string;
  excerpt: string;
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [pagefind, setPagefind] = useState<any>(null);

  useEffect(() => {
    // Initialize Pagefind
    const initPagefind = async () => {
      const pagefind = await import("/pagefind/pagefind.js");
      setPagefind(pagefind);
    };

    initPagefind();
  }, []);

  const search = async (searchQuery: string) => {
    if (!pagefind) return;

    setQuery(searchQuery);

    if (searchQuery.length > 1) {
      const search = await pagefind.search(searchQuery);
      const results = await Promise.all(
        search.results.map(async (result: any) => {
          const data = await result.data();
          return {
            id: result.id,
            url: data.url,
            title: data.meta.title,
            excerpt: data.excerpt,
          };
        })
      );
      setResults(results);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => search(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />

      <div className="search-results">
        {results.map((result) => (
          <div key={result.id} className="search-result">
            <a href={result.url}>
              <h3>{result.title}</h3>
              <p>{result.excerpt}</p>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .search-container {
          max-width: 600px;
          margin: 0 auto;
        }
        .search-input {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          margin-bottom: 16px;
        }
        .search-results {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .search-result {
          padding: 16px;
          border: 1px solid #eee;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
