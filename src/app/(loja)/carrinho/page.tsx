"use client"

import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho"
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio"
import TotalCarrinho from "@/components/carrinho/TotalCarrinho"
import Pagina from "@/components/template/Pagina"
import useCarrinho from "@/data/hooks/useCarrinho"

/** Página de carrinho. */
export default function PaginaCarrinho() {
  // contexto do carrinho
  const { itens, adicionar, remover } = useCarrinho()

  // retorno do componente
  return (
    <Pagina className="flex flex-col gap-10">
      {/* Verificar se há ou não itens no carrinho */}
      {itens.length === 0 ? (
        <CarrinhoVazio />
      ) : (
        <>
          {/* Lista de itens */}
          <div className="flex flex-col gap-5 flex-1">
            {/* Iterar elementos */}
            {itens.map((item) => (
              <AreaItemCarrinho
                key={item.produto.id}
                item={item}
                // função que adiciona itens
                adicionar={(item) => adicionar(item.produto)}
                // função que remove itens
                remover={(item) => remover(item.produto)}
              />
            ))}
          </div>
          {/* Total do carrinho */}
          <TotalCarrinho itens={itens} />
        </>
      )}
    </Pagina>
  )
}
