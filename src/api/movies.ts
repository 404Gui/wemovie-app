export type Movie = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch("https://wefit-movies.vercel.app/api/movies");

  if (!res.ok) {
    throw new Error("erro ao buscar osfilmes");
  }

  const data = await res.json();
  return data.products;
}
