"use client"

import { createContext, useState } from "react"

/** Interface dos props do contexto `ContextoCarrinho`. */
interface ContextoCarrinhoProps {
  numero: number
  incrementar?: () => void
  decrementar?: () => void
}

/** Contexto do carrinho de compras. */
const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)

/** Contexto do estado do carrinho. */
export function ProvedorCarrinho(props: any) {
  const [numero, setNumero] = useState(1007)

  // retorno do componente
  return (
    <ContextoCarrinho.Provider
      value={{
        numero,
        incrementar: () => setNumero(numero + 1),
        decrementar: () => setNumero(numero - 1),
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  )
}

export default ContextoCarrinho
