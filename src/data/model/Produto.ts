/** Interface do modelo do objeto Produto. */
export default interface Produto {
  /** ID do produto. */
  id: number
  /** Nome do produto. */
  nome: string
  /** Preço do produto (em reais). */
  preco: number
  /** Descrição do produto. */
  descricao: string
  /** Imagem do produto. */
  imagem: string
}
