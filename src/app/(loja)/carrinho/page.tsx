"use client"

import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

/** Página de carrinho. */
export default function PaginaCarrinho() {
  // usar o contexto
  const { numero } = useCarrinho()

  // retorno do componente
  return <Pagina>Carrinho: {numero}</Pagina>
}
