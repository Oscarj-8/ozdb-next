import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ movie }) {
  return (
    <div
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 trasit 
    duration-200 overflow-hidden w-full max-w-[30em] max-h-fit"
    >
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-85 group-hover:scale-105 transition duration-300"
        ></Image>
        <div className="p-2 min-w-0">
          <p className="line-clamp-2">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate min-w-0">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
