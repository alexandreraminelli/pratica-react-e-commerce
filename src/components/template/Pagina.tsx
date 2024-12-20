import Cabecalho from "./Cabecalho"

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
    <div className="flex flex-col">
      {/* Cabeçalho */}
      <Cabecalho />
      {/* Elemento filho (conteúdo da página) */}
      <main>{props.children}</main>
    </div>
  )
}
