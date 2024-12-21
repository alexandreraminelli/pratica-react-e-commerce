import ItemCarrinho from "@/data/model/ItemCarrinho"

/** Interface dos props do componente `TotalCarrinho`. */
export interface TotalCarrinhoProps {
  /** Array dos itens que estão no carrinho. */
  itens: ItemCarrinho[]
}

/** Componente que exibe o preço total dos itens no carrinho de compras. */
export default function TotalCarrinho(props: TotalCarrinhoProps) {
  /** Preço total dos itens do carrinho. */
  const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
  /** Preço total dos itens do carrinho formatado. */
  const totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total)

  // retorno do componente
  return (
    <div className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
      {/* Informações */}
      <div className="flex flex-col justify-between">
        {/* Preço total */}
        <span className="text-zinc-500">Total</span>
        <span className="text-3xl font-bold text-yellow-500">{totalFormatado}</span>
      </div>
      {/* Botão de finalizar compra */}
      <button className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
    </div>
  )
}
