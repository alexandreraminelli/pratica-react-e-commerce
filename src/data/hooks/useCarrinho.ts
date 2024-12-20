"use client"

import { useContext } from "react"
import ContextoCarrinho from "../contexts/ContextoCarrinho"

/** Hook para obter o contexto `ContextoCarrinho`. */
export default function useCarrinho() {
  return useContext(ContextoCarrinho)
}
