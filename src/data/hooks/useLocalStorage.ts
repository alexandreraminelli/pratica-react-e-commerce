"use client"

import { useCallback } from "react"

/**
 * Hook para armazenar e recuperar dados no Local Storage.
 * Permite que, ao fazer o refresh da página, as informações do cliente (como itens no carrinho) não sejam perdidas.
 */
export default function useLocalStorage() {
  /** Getter dos dados. Cria um hook para acessar o local storage do browser. */
  const get = useCallback((key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }, [])

  /** Setter dos dados. */
  const set = useCallback((key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  /** Remove a chave. */
  const remove = useCallback((key: string) => {
    localStorage.removeItem(key)
  }, [])

  return { get, set, remove }
}
