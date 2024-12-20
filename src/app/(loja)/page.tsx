"use client"

import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

/** Componente da página. */
export default function Home() {
  // usar o contexto
  const { numero, incrementar, decrementar } = useCarrinho()

  // retorno do componente
  return (
    <Pagina>
      <div>
        Número: {numero}
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </Pagina>
  )
}
