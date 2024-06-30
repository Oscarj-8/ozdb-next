import React from "react";

export default function Movies({ results }) {
  return (
    <div>
      {results.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
