import Container from "../../components/common/Container/Container";
import CartContent from "../../components/CartContent/CartContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WeMovies - Seu Carrinho",
  description: "Somos WeFit!",
};

export default function CartPage() {
  return (
    <Container>
      <main>
        <CartContent />
      </main>
    </Container>
  );
}
