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
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Cabecalho />
      {/* Elemento filho (conteúdo da página) */}
      <main
        className={`
      w-[90vw] w-[1200px] max-w-[1200px] mx-auto
      flex-1
      py-10
      ${props.className}
      `}
      >
        {props.children}
      </main>
    </div>
  )
}
