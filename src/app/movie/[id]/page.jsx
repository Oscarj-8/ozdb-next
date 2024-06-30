import { Pragati_Narrow } from "next/font/google";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await resp.json();
  console.log(movie);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col lg:flex-row content-center max-w-6xl mx-auto lg:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg "
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3">{movie.overview}</p>
          <p className="mb-3 ">
            <span className="font-semibold mr-1">Date released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 flex items-center gap-1">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
            <FaStar className="fill-yellow-500" />
          </p>
        </div>
      </div>
    </div>
  );
}
