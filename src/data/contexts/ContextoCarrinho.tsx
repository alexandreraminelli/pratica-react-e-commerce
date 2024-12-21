"use client"

import { createContext, useEffect, useState } from "react"
import ItemCarrinho from "../model/ItemCarrinho"
import Produto from "../model/Produto"
import useLocalStorage from "../hooks/useLocalStorage"

/** Interface dos props do contexto `ContextoCarrinho`. */
interface ContextoCarrinhoProps {
  /** Array com os itens do carrinho. */
  itens: ItemCarrinho[]
  /** Quantidades de itens que estão sendo adicionados ao carrinho. */
  qtdeDeItens: number
  /** Função que adiciona um item (do modelo Produto) ao carrinho. */
  adicionar: (item: Produto) => void
  /** Função que remove um item (do modelo Produto) do carrinho. */
  remover: (item: Produto) => void
}

/** Contexto do carrinho de compras. */
const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)

/** Contexto do estado do carrinho. */
export function ProvedorCarrinho(props: any) {
  /* Número de itens no carrinho.
   * Array de itens do modelo ItemCarrinho.
   * Valor inicial: Array vazio.
   */
  const [itens, setItens] = useState<ItemCarrinho[]>([])
  // hook para armazenar e recuperar dados no Local Storage
  const { set, get } = useLocalStorage()

  // obter itens do Local Storage do browser
  useEffect(() => {
    const carrinho = get("carrinho")
    if (carrinho) {
      setItens(carrinho)
    }
  }, [get])

  /** Função que adiciona um item no carrinho. */
  function adicionar(produto: Produto) {
    // Verificar se o item já está no carrinho
    /** Índice do produto.
     * Utiliza a função `findIndex` para encontrar o índice do item no array e retorna `-1` se o produto não estiver no carrinho.
     */
    const indice = itens.findIndex((i) => i.produto.id === produto.id)

    if (
      indice === -1 // produto não está no carrinho
    ) {
      // Adicionar o item ao carrinho
      alterarItens([...itens, { produto, quantidade: 1 }])
    } else {
      // produto está no carrinho
      // Incrementar a quantidade do item
      const novosItens = [...itens]
      novosItens[indice].quantidade++
      alterarItens(novosItens)
    }
  }

  /** Função que remove um item do carrinho. */
  function remover(produto: Produto) {
    const novosItens = itens
      .map((i) => {
        if (i.produto.id === produto.id) {
          i.quantidade--
        }
        return i
      })
      .filter((i) => i.quantidade > 0) // remover produtos que não tenham nenhum item no carrinho
    alterarItens(novosItens)
  }

  /** Altera os itens. */
  function alterarItens(novosItens: ItemCarrinho[]) {
    // chamar função que atualiza o estado (quantidade de itens no carrinho)
    setItens(novosItens)
    // salvar os itens no Local Storage
    set("carrinho", novosItens)
  }

  // retorno do componente
  return (
    <ContextoCarrinho.Provider
      value={{
        itens,
        adicionar,
        remover,
        get qtdeDeItens() {
          return itens.reduce((total, item) => total + item.quantidade, 0)
        },
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  )
}

export default ContextoCarrinho
