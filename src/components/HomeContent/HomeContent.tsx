import HomeAddButton from "./HomeAddButton/HomeAddButton";
import { Movie } from "@/api/movies";

type Props = {
  movies: Movie[];
};

const HomeContent = ({ movies }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-3">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white rounded shadow-lg flex flex-col items-center p-4 "
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-40 h-56 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
            {movie.title}
          </h2>
          <p className="text-blue-600 font-bold text-lg mb-4">
            R$ {movie.price.toFixed(2)}
          </p>
          <HomeAddButton
            movieId={movie.id}
            title={movie.title}
            price={movie.price}
            image={movie.image}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
