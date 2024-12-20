/** Interface dos props do componente `Pagina`. */
export interface PaginaProps {
  /** Elemento filho. */
  children: React.ReactNode
  /** Classes personalizadas. (opcional) */
  className?: string
}

/** Componente com o template de uma página. */
export default function Pagina(props: PaginaProps) {
  return (
    <div>
      {/* Elemento filho */}
      {props.children}
    </div>
  )
}
