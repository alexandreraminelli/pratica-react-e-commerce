"use client"

import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho"
import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

/** Página de carrinho. */
export default function PaginaCarrinho() {
  // contexto do carrinho
  const { itens } = useCarrinho()

  // retorno do componente
  return (
    <Pagina>
      {/* Iterar elementos */}
      {itens.map((item) => (
        <AreaItemCarrinho key={item.produto.id} item={item} />
      ))}
    </Pagina>
  )
}
