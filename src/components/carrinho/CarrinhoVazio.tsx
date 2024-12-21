import { IconShoppingCartOff } from "@tabler/icons-react"
import Link from "next/link"

/** Componente de mensagem de carrinho vazio. Vísivel quando não há nenhum item no carrinho. */
export default function CarrinhoVazio() {
  return (
    <div className="flex flex-col items-center gap-4 text-zinc-500">
      {/* Ícone de carrinho vazio */}
      <IconShoppingCartOff size={150} stroke={0.5} />
      {/* Mensagem */}
      <div>
        <h2 className="text-3xl">Seu carrinho está vazio.</h2>
        <p>Adicione produtos clicando no botão abaixo.</p>
      </div>
      {/* Link pra página inicial */}
      <Link href="/" className="bg-green-500 text-white rounded-sm p-4">
        Ver produtos
      </Link>
    </div>
  )
}
