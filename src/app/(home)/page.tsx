import Container from "../../components/common/Container/Container";
import HomeContent from "../../components/HomeContent/HomeContent";
import { getMovies } from "@/api/movies";

export default async function HomePage() {
  const movies = await getMovies(); 

  return (
    <Container>
      <main>
        <HomeContent movies={movies} />
      </main>
    </Container>
  );
}
