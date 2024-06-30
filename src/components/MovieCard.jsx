import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ movie }) {
  return (
    <div
      className="group bg-gradient-to-br dark:from-[#191510] dark:to-[#171911] relative cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 trasit 
    duration-200 overflow-hidden w-full after:content-[''] after:w-[6em] after:h-[6em] hover:after:w-[8em] hover:after:h-[8em] after:transition-all after:duration-300 after:ease-in-out after:rounded-full after:bg-white after:absolute after:-bottom-10 after:-left-10 after:opacity-15 after:blur-2xl after:backdrop-blur-3xl"
    >
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-85 group-hover:scale-105 transition duration-300"
        ></Image>
        <div className="flex flex-col gap-3 p-2">
          <h2 className="text-lg font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="line-clamp-3 text-sm">{movie.overview}</p>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3 text-sky-600 fill-sky-600" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
