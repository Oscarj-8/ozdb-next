import React from "react";
import MovieCard from "./MovieCard";

export default function Movies({ results }) {
  return (
    <div className="w-full p-3 place-items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl gap-6 space-y-6 md:space-y-0 mx-auto py-4">
      {results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
