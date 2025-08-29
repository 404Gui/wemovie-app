"use client";

import Container from "../components/common/Container/Container";
import EmptyState from "../components/EmptyState/EmptyState";


export default function Error({ reset }: { reset: () => void }) {
  return (
    <Container>
        <EmptyState
          title="Parece que não há nada por aqui :("
          image="/vazio.png"
          buttonLabel="Recarregar Pagina"
          onClick={() => reset()}
        />
    </Container>
  );
}
