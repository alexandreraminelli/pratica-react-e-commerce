// importação de interfaces
import Produto from "./Produto"

/** Modelo dos items que foram adicionados ao carrinho. */
export default interface ItemCarrinho {
  /** Produto que foi adicionado ao carrinho. */
  produto: Produto
  /** Quantidade do produto que foram adicionados ao carrinho. */
  quantidade: number
}
