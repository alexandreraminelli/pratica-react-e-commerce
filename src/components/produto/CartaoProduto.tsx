import Produto from "@/data/model/Produto"
import Image from "next/image"

/** Interface dos props do componente `CartaoProduto`. */
interface CartaoProdutoProps {
  /** O objeto do produto a ser exibido. */
  produto: Produto
}

/** Componente do card de produto. */
export default function CartaoProduto(props: CartaoProdutoProps) {
  // Obter atributos do produto
  const { nome, descricao, preco, imagem } = props.produto

  /** Preço formatado pro formato monetário. */
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco)

  return (
    <div className="flex flex-col w-72 bg-zinc-900 rounded-lg overflow-clip">
      {/* Imagem */}
      <div className="relative w-72 h-52">
        <Image src={imagem} alt={nome} fill className="object-cover" />
      </div>

      {/* Informações */}
      <div className="flex-1 p-4 text-white">
        {/* Nome */}
        <h2 className="text-xl font-bold">{nome}</h2>
        {/* Descrição */}
        <p className="text-sm text-zinc-400 0">{descricao}</p>

        <div className="flex justify-between items-center">
          {/* Preço */}
          <span className="text-lg font-semibold mt-2">{precoFormatado}</span>
          {/* Botão de adicionar ao carrinho */}
          <button className="border rounded-full px-5 py-1 text-sm">Adicionar</button>
        </div>
      </div>
    </div>
  )
}
