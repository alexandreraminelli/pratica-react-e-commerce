"use client"

import CartaoProduto from "@/components/produto/CartaoProduto"
import Pagina from "@/components/template/Pagina"
import produtos from "@/data/constants/produtos"

/** Componente da página. */
export default function Home() {
  return (
    <Pagina>
      <div
        className="
      flex flex-wrap justify-center
      gap-5"
      >
        {/* Iterar cards de produtos */}
        {produtos.map((produto) => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  )
}
