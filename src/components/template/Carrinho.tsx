import useCarrinho from "@/data/hooks/useCarrinho"
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

/** Componente do botão de carrinho do cabeçalho. */
export default function Carrinho() {
  // obter a quantidade de itens no carrinho
  const { qtdeDeItens } = useCarrinho()

  // retorno do componente
  return (
    <Link href="/carrinho">
      <div
        className="
      flex items-center relative"
      >
        {/* Ícone de carrinho */}
        <IconShoppingCart size={32} stroke={1} />
        {/* Círculo com a quantidade de itens */}
        <div
          className="
        absolute -top-2.5 -right-2.5
        w-6 h-6
        bg-red-600 rounded-full
        flex justify-center items-center
        text-xs"
        >
          {qtdeDeItens}
        </div>
      </div>
    </Link>
  )
}
