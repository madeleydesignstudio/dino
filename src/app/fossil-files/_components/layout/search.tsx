// "use client";

// import { useEffect, useState } from "react";

// export default function Search() {
//   const [searchInstance, setSearchInstance] = useState<any>(null);
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Initialize Pagefind when component mounts
//     const initPagefind = async () => {
//       try {
//         const pagefind = await import("/pagefind/pagefind.js");
//         await pagefind.init();
//         setSearchInstance(pagefind);
//       } catch (err) {
//         console.error("Error initializing Pagefind:", err);
//       }
//     };

//     initPagefind();
//   }, []);

//   const handleSearch = async (term: string) => {
//     if (!searchInstance || !term) {
//       setSearchResults([]);
//       return;
//     }

//     setLoading(true);
//     try {
//       const search = await searchInstance.search(term);
//       const results = await Promise.all(
//         search.results.map((result: any) => result.data())
//       );
//       setSearchResults(results);
//     } catch (err) {
//       console.error("Search error:", err);
//       setSearchResults([]);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Search tools..."
//         className="w-full px-4 py-2 text-sm rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500"
//         onChange={(e) => handleSearch(e.target.value)}
//       />

//       {/* Results dropdown */}
//       {searchResults.length > 0 && (
//         <div className="absolute top-full mt-2 w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
//           {searchResults.map((result, index) => (
//             <a
//               key={index}
//               href={result.url}
//               className="block px-4 py-2 hover:bg-stone-100 dark:hover:bg-stone-700"
//             >
//               <div className="text-sm font-medium text-stone-800 dark:text-stone-200">
//                 {result.meta.title}
//               </div>
//               {result.excerpt && (
//                 <div className="text-xs text-stone-500 dark:text-stone-400">
//                   {result.excerpt}
//                 </div>
//               )}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
