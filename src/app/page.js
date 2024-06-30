// import Movies from "@/components/Movies";

// const API_KEY = process.env.API_KEY;

// const Home = async ({ searchParams }) => {
//   const genre = searchParams.genre || "fetchTrending";

//   const resp = await fetch(
//     `https://api.themoviedb.org/3${
//       genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
//     }?api_key=${API_KEY}&language=en-US&page=1`,
//     { next: { revalidate: 10000 } }
//   );

//   const data = await resp.json();

//   if (!resp.ok) {
//     throw new Error(`API request failed with status ${resp.status}`);
//   }

//   const results = data.results;

//   return (
//     <div>
//       <Movies results={results} />
//     </div>
//   );
// };

// export default Home;

import Movies from "@/components/Movies";
import { Suspense } from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const resp = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(`API request failed with status ${resp.status}`);
  }

  const results = data.results;

  return (
    <div>
      <Movies results={results} />
    </div>
  );
};

export default function HomePageWrapper(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home {...props} />
    </Suspense>
  );
}
