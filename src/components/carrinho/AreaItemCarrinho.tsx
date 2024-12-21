import ItemCarrinho from "@/data/model/ItemCarrinho"

/** Interface dos props do componente `AreaItemCarrinho`. */
export interface AreaItemCarrinhoProps {
  /** Item do carrinho. */
  item: ItemCarrinho
}

/** Componente do widget do carrinho. */
export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
  return (
    <div>
      {props.item.produto.nome} - {props.item.quantidade}
    </div>
  )
}
