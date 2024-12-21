import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconEqual, IconMinus, IconPlus, IconX } from "@tabler/icons-react"
import Image from "next/image"

/** Interface dos props do componente `AreaItemCarrinho`. */
export interface AreaItemCarrinhoProps {
  /** Item do carrinho. */
  item: ItemCarrinho
  /** Função que adiciona um item ao carrinho. */
  adicionar?: (item: ItemCarrinho) => void
  /** Função que remove um item do carrinho. */
  remover?: (item: ItemCarrinho) => void
}

/** Componente do widget do carrinho. */
export default function AreaItemCarrinho({ item, adicionar, remover }: AreaItemCarrinhoProps) {
  /** Preço formatado pro formato monetário. */
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(item.produto.preco)
  /** Preço total do item. */
  const precoTotal = item.produto.preco * item.quantidade
  /** Preço total formatado como monetário. */
  const precoTotalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(precoTotal)

  // retorno
  return (
    <section className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
      {/* Imagem */}
      <div className="relative w-28 h-28">
        <Image src={item.produto.imagem} alt={item.produto.nome} fill className="object-cover" />
      </div>
      {/* Informações */}
      <div className="flex flex-col justify-center flex-1 text-white">
        {/* Nome */}
        <span className="text-xl font-bold">{item.produto.nome}</span>
        {/* Descrição */}
        <span className="text-sm text-zinc-400">{item.produto.descricao}</span>
        {/* Preço */}
        <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-semibold">
          {/* Preço base */}
          <span>{precoFormatado}</span>
          {/* Multiplicação */}
          <IconX />
          {/* Quantidade */}
          <span>{item.quantidade}</span>
          {/* Igual */}
          <IconEqual />
          {/* Preço total */}
          <span className="text-yellow-500">{precoTotalFormatado}</span>
        </div>
      </div>
      {/* Quantidade de itens */}
      <div className="flex gap-2 items-center px-5 text-white">
        {/* Botão diminuir */}
        <button onClick={() => remover?.(item)}>
          <IconMinus />
        </button>
        {/* Quantidade */}
        <span className="flex px-4 py-2 rounded-md bg-black">{item.quantidade}</span>
        {/* Botão aumentar */}
        <button onClick={() => adicionar?.(item)}>
          <IconPlus />
        </button>
      </div>
    </section>
  )
}
