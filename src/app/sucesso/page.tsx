import { Metadata } from "next";
import Container from "../../components/common/Container/Container";
import SuccessContent from "../../components/SuccessContent/SuccessContent";

export const metadata: Metadata = {
  title: "WeMovies - Compra realizada!",
  description: "Somos WeFit!",
};

export default function SuccessPage() {
  return (
    <Container>
      <main>
        <SuccessContent />
      </main>
    </Container>
  );
}
